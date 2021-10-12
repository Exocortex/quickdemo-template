import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';
import dotenv from 'dotenv';
import connection from '../threekit/connection';
import api from '../threekit/api';
import paths from '../config/paths';
import axios from 'axios';
import twilio from 'twilio';
import generatePdf from './pdf-generator';

//  ENV VARIABLES SETUP
dotenv.config();
const argv = process.argv.slice(2);
const portIdx =
  argv.indexOf('--port') !== -1 ? argv.indexOf('--port') : argv.indexOf('-p');

const PORT = process.env.PORT || (portIdx > 0 ? argv[portIdx + 1] : 5000);
const EMAIL_TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID;
const EMAIL_API_KEY = process.env.EMAIL_API_KEY;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_FROM_PHONE_NUMBER = process.env.TWILIO_FROM_PHONE_NUMBER;

const threekitConfig = {
  authToken: process.env.THREEKIT_PRIVATE_TOKEN,
  orgId: process.env.THREEKIT_PRIVATE_TOKEN,
  assetId: process.env.THREEKIT_ASSET_ID,
  threekitEnv: process.env.THREEKIT_ENV,
};

connection.connect(threekitConfig);

const twilioClient = !!(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN)
  ? twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
  : undefined;

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());

app.get('/api/health', (req, res) => {
  res.status(200).send({ message: 'server healthy!' });
});

app.post('/api/snapshot', upload.single('files'), async (req, res) => {
  const file = req.file;
  const [response, error] = await api.files.save(file);
  if (error) {
    console.log(error.config);
    res.status(500).send(error);
    return;
  }

  const output = {
    ...response.files[0],
    url: `https://${threekitConfig.threekitEnv}/api/files/${response.files[0].id}/content`,
  };

  res.status(200).send(output);
});

app.post('/api/email', async (req, res) => {
  const data = req.body;

  const message = {
    template_id: data.templateId || EMAIL_TEMPLATE_ID,
    from: { email: data.from || 'asaeed@threekit.com' },
    personalizations: [
      {
        to: [
          {
            email: data.email,
          },
        ],
        dynamic_template_data: data,
      },
    ],
  };

  try {
    const emailResponse = await axios.post(
      'https://api.sendgrid.com/v3/mail/send',
      message,
      {
        headers: {
          Authorization: `Bearer ${EMAIL_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).send(emailResponse.data);
  } catch (e) {
    console.log(e);
    res.status(200).send(e);
  }
});

app.post('/api/sms', async (req, res) => {
  if (!twilioClient) {
    res
      .status(500)
      .json({ message: 'Twilio for sms share has not been setup' });
    return;
  }
  const { to, message } = req.body;

  if (!to.length || !message.length)
    return res.status(422).json({ message: 'incomplete request data' });

  const data = {
    from: TWILIO_FROM_PHONE_NUMBER,
    to,
    body: message,
  };

  try {
    const smsResponse = await twilioClient.messages.create(data);
    res.status(200).send(smsResponse);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

app.get('/api/pdf/:template', async (req, res) => {
  if (!req.params.template)
    return res.status(422).send({ message: 'missing PDF template' });

  try {
    const pdf = await generatePdf(req.params.template, undefined);

    res.set({ 'Content-type': 'application/pdf' });
    res.status(200).send(pdf);
  } catch (e) {
    console.log(e);
    res.status(422).send(e);
  }
});

app.post('/api/pdf/:template', async (req, res) => {
  if (!req.body) return res.status(422).send();
  if (!req.params.template)
    return res.status(422).send({ message: 'missing PDF template' });

  try {
    const pdf = await generatePdf(req.params.template, req.body);

    res.set(
      Object.assign(
        { 'Content-type': 'application/pdf' },
        req.query.download === 'true'
          ? {
              'Content-Disposition': `attachment;filename=${
                req.query.filename || 'threekit-configuration.pdf'
              }`,
            }
          : {}
      )
    );
    res.end(pdf);
  } catch (e) {
    console.log(e);
    res.status(422).send(e);
  }
});

app.use(express.static(paths.appBuild));
app.get('*', (req, res) => {
  res.sendFile(paths.appBuild);
});

app.listen(PORT, () => console.log('listening on port: ', PORT));

import http from '../http';
import FormData from 'form-data';

export const save = (data) =>
  new Promise(async (resolve) => {
    let message;
    if (!data) message = 'Requires Data';
    if (message) return [undefined, { message }];

    const fd = new FormData();
    fd.append(data.fieldname, data.buffer, data.originalname);
    const [fileResponse, error] = await http.files.postFile(fd);
    if (error) resolve([undefined, error]);
    resolve([fileResponse, undefined]);
  });

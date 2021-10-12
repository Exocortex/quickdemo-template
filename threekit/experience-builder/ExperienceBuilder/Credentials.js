import React, { useState } from 'react';
import {
  CredentialsWrapper as Wrapper,
  ActionArea,
} from './experienceBuilder.styles';
import { Input, Button } from 'antd';

export const Credentials = (props) => {
  const [orgId, setOrgId] = useState(props.creds?.orgId || '');
  const [authToken, setAuthToken] = useState(props.creds?.authToken || '');
  const [threekitEnv, setThreekitEnv] = useState(
    props.creds?.threekitEnv || 'preview.threekit.com'
  );
  const { onContinue } = props;

  const handleClick = () => onContinue({ orgId, authToken, threekitEnv });

  return (
    <Wrapper>
      <div>Enter your Threekit Organizations credentials</div>
      <div>
        Threekit Environment:
        <Input
          value={threekitEnv}
          onChange={(e) => setThreekitEnv(e.target.value)}
        />
      </div>
      <div>
        Auth Token:
        <Input
          value={authToken}
          onChange={(e) => setAuthToken(e.target.value)}
        />
      </div>
      <div>
        OrgId:
        <Input value={orgId} onChange={(e) => setOrgId(e.target.value)} />
      </div>
      <ActionArea>
        <div />
        <Button
          style={{ marginTop: '12px' }}
          disabled={!orgId.length || !authToken.length || !threekitEnv.length}
          onClick={handleClick}
        >
          Continue
        </Button>
      </ActionArea>
    </Wrapper>
  );
};

export default Credentials;

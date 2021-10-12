import React from 'react';
import WidgetButton from './ShareEmailButton';
import ShareEmailForm from './ShareEmailForm';
import { Modal } from '../../Layouts';
import container from './shareEmailContainer';
import { Share as ShareIcon } from '../../../icons';

export const ShareEmail = (props) => {
  const { onSend, show, setShow, showLabel } = Object.assign(
    { onSend: undefined, show: false, setShow: undefined },
    props
  );

  return (
    <React.Fragment>
      <WidgetButton handleClick={() => setShow(true)} showLabel={showLabel} />
      <Modal show={show} handleClose={() => setShow(false)}>
        <ShareEmailForm onSend={onSend} onCancel={() => setShow(false)} />
      </Modal>
    </React.Fragment>
  );
};

ShareEmail.componentName = 'Share Email';
ShareEmail.Icon = ShareIcon;

export default container(ShareEmail);

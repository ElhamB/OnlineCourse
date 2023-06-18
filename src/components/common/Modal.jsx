import React, { Fragment } from "react";
const Backdrop = (props) => {
  return <div className="menu-overlay" onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return <div>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />,
      <ModalOverlay>{props.children}</ModalOverlay>,
    </Fragment>
  );
};

export default Modal;

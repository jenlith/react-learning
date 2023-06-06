import React from "react";

const Test = ({
  title,
  description,
  acceptText,
  cancelText,
  acceptHandler,
  cancelHandler,
  closeHandler,
}) => {
  const [open, setOpen] = React.useState(true);
  const cancelButtonRef = React.useRef();
  const acceptButtonRef = React.useRef();
  const handleOKClicked = () => {
    if (acceptHandler) {
      acceptHandler();
    }
  };
  const handleCancelClicked = async () => {
    setOpen(false);
    if (cancelHandler) {
      cancelHandler();
    }
  };
  const handleClose = () => {
    if (closeHandler) {
      closeHandler();
    }
  };

  return (
    <div>
      <button onClick={handleClose}>Close</button>
      <h2>{title}</h2>
      <p>{description}</p>
      <button ref={acceptButtonRef} onClick={handleOKClicked}>{acceptText}</button>
      <button ref={cancelButtonRef} onClick={handleCancelClicked}>{cancelText}</button>
    </div>
  );
};

export default Test;
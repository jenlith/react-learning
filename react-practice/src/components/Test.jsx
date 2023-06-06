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
  const handleAccept = () => {
    if (acceptHandler) {
      acceptHandler();
    }
  };
  const handleCancel = async () => {
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
      <button onClick={handleAccept}>{acceptText}</button>
      <button onClick={handleCancel}>{cancelText}</button>
    </div>
  );
};

export default Test;

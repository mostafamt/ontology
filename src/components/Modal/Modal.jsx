import React from "react";
import Content from "./Content";
import Header from "./Header";

import style from "./style.module.css";

const Modal = ({ open, setOpen, title, children }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: open ? "block" : "none",
      }}
    >
      <div className={style.backdrop} onClick={() => setOpen(false)}></div>

      <div className={style.modal}>
        <Header title={title} handleClose={handleClose} />
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Modal;

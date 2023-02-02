import React from "react";

import style from "./style.module.css";

const Content = ({ children }) => {
  return (
    <div className={style.content}>{children ? children : <h1>Modal</h1>}</div>
  );
};

export default Content;

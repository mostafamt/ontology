import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

import style from "./style.module.css";

const Header = ({ title, handleClose }) => {
  return (
    <div>
      <div className={style.header}>
        <h3>{title ? title : "Title"}</h3>
        <button onClick={handleClose}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default Header;

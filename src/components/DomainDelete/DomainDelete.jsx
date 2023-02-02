import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDomain } from "../../store/actions/domainActions";

import style from "./domainDelete.module.css";

const DomainDelete = ({ handleClose }) => {
  const dispatch = useDispatch();
  const selectedDomain = useSelector((state) => state.domain.selectedDomain);

  const onDeleteHandler = () => {
    dispatch(deleteDomain(selectedDomain.id));
    handleClose();
  };

  return (
    <div className={style.domainDelete}>
      <p>Are you sure you want to delete ?</p>
      <div className={style.controls}>
        <Button variant="contained" color="error" onClick={onDeleteHandler}>
          yes
        </Button>
        <Button variant="outlined" onClick={handleClose}>
          no
        </Button>
      </div>
    </div>
  );
};

export default DomainDelete;

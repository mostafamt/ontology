import { Button } from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./domainRow.module.css";
import { useDispatch } from "react-redux";
import { setSelectedDomain } from "../../store/actions/domainActions";
import { DELETE_DOMAIN, UPDATE_DOMAIN } from "../../pages/Home/Home";
import { useNavigate } from "react-router-dom";

const DomainRow = ({ id, name, openModal, setModalType }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onEditHandler = () => {
    dispatch(setSelectedDomain({ id: id, value: name }));
    setModalType(UPDATE_DOMAIN);
    openModal();
  };

  const onDeleteHandler = () => {
    dispatch(setSelectedDomain({ id: id, value: name }));
    setModalType(DELETE_DOMAIN);
    openModal();
  };

  return (
    <div className={styles.domainRow}>
      <Button variant="outlined" onClick={() => navigate(`/domains/${id}`)}>
        {name}
      </Button>
      <Button variant="outlined" onClick={onEditHandler}>
        <CreateIcon />
      </Button>
      <Button variant="outlined" color="error" onClick={onDeleteHandler}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default DomainRow;

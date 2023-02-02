import { Button } from "@mui/material";
import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./home.module.css";
import { useDispatch } from "react-redux";
import { setSelectedDomain } from "../../store/actions/domainActions";

const Domain = ({
  domainId,
  domainName,
  openModal,
  setSelectedDomainValue,
  setUpdateDelete,
  selectedDomainId,
  setSelectedDomainId,
}) => {
  const dispatch = useDispatch();
  const onEditHandler = () => {
    setUpdateDelete(true);
    setSelectedDomainValue(domainName);
    setSelectedDomainId(domainId);
    openModal(domainId);
    dispatch(setSelectedDomain({ id: domainId, value: domainName }));
  };

  const onDeleteHandler = () => {
    setUpdateDelete(false);
    setSelectedDomainValue(domainName);
    setSelectedDomainId(domainId);
    openModal(domainId);

    dispatch(setSelectedDomain({ id: domainId, value: domainName }));
  };

  return (
    <div className={styles.domainRow}>
      <Button variant="outlined">{domainName}</Button>
      <Button variant="outlined" onClick={onEditHandler}>
        <CreateIcon />
      </Button>
      <Button variant="outlined" color="error" onClick={onDeleteHandler}>
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default Domain;

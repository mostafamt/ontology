import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addDomain } from "../../store/actions/domainActions";

import style from "../DomainUpdate/domainUpdate.module.css";

const DomainCreate = ({ handleClose }) => {
  const dispatch = useDispatch();
  const [domain, setDomain] = React.useState({
    id: 0,
    value: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addDomain(domain.value));
    handleClose();
    setDomain({
      id: 0,
      value: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <TextField
        value={domain.value}
        onChange={(e) =>
          setDomain((prevDomain) => ({ ...prevDomain, value: e.target.value }))
        }
        placeholder="Domain Name..."
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
};

export default DomainCreate;

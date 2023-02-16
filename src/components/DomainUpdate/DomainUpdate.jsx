import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDomain } from "../../store/actions/domainActions";

import style from "./domainUpdate.module.css";

const DomainUpdate = ({
  selectedDomainId,
  selectedDomainValue,
  setSelectedDomainValue,
  handleClose,
}) => {
  const dispatch = useDispatch();
  const selectedDomain = useSelector((state) => state.domain.selectedDomain);
  const [domain, setDomain] = React.useState({
    id: 0,
    value: "",
  });

  React.useEffect(() => {
    setDomain(selectedDomain);
  }, [selectedDomain]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editDomain(domain.id, domain.value));
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <TextField
        value={domain.value}
        onChange={(e) =>
          setDomain((prevDomain) => ({ ...prevDomain, value: e.target.value }))
        }
        placeholder="Domain"
      />
      <Button type="submit" variant="contained">
        Update
      </Button>
    </form>
  );
};

export default DomainUpdate;

import { Button, TextField } from "@mui/material";
import React from "react";

const DomainCreate = () => {
  return (
    <form>
      <TextField placeholder="Domain" />
      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};

export default DomainCreate;

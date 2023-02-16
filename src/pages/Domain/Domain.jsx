import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import style from "./domain.module.css";

const Domain = () => {
  const params = useParams();
  const { id } = params;
  const domain = useSelector((state) => state.domain.domains)[id];
  return (
    <div className={style.domain}>
      <Container maxWidth="md">
        <h1>{domain}</h1>
      </Container>
    </div>
  );
};

export default Domain;

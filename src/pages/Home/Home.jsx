import { Button, Container } from "@mui/material";
import React from "react";

import style from "./home.module.css";
import Modal from "../../components/Modal/Modal";
import DomainUpdate from "../../components/DomainUpdate/DomainUpdate";
import DomainDelete from "../../components/DomainDelete/DomainDelete";
import { useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import DomainCreate from "../../components/DomainCreate/DomainCreate";
import DomainRow from "../../components/DomainRow/DomainRow";

export const ADD_DOMAIN = "ADD_DOMAIN";
export const UPDATE_DOMAIN = "UPDATE_DOMAIN";
export const DELETE_DOMAIN = "DELETE_DOMAIN";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState(ADD_DOMAIN);

  const domains = useSelector((state) => state.domain.domains);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let modalContent, title;
  if (modalType === ADD_DOMAIN) {
    modalContent = <DomainCreate handleClose={handleClose} />;
    title = "add domain";
  } else if (modalType === UPDATE_DOMAIN) {
    modalContent = <DomainUpdate handleClose={handleClose} />;
    title = "update domain";
  } else {
    modalContent = <DomainDelete handleClose={handleClose} />;
    title = "delete domain";
  }

  return (
    <div className={style.home}>
      <Container maxWidth="md">
        <Modal open={open} handleClose={handleClose} title={title}>
          {modalContent}
        </Modal>
        <div className={style.header}>
          <h1>Domains</h1>
          <Button
            startIcon={<AddIcon />}
            onClick={() => {
              setOpen(true);
              setModalType(ADD_DOMAIN);
            }}
          >
            add new domain
          </Button>
        </div>
        <ul className={style.list}>
          {domains.map((domain, id) => (
            <li key={id}>
              <DomainRow
                id={id}
                name={domain}
                openModal={handleOpen}
                setModalType={setModalType}
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Home;

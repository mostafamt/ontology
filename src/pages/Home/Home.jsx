import { Button, Container } from "@mui/material";
import React from "react";
import Domain from "./Domain";

import style from "./home.module.css";
import Modal from "../../components/Modal/Modal";
import DomainUpdate from "../../components/DomainUpdate/DomainUpdate";
import DomainDelete from "../../components/DomainDelete/DomainDelete";
import { useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import DomainCreate from "../../components/DomainCreate/DomainCreate";

const Home = ({ updateDomains, deleteDomain }) => {
  const [selectedDomainId, setSelectedDomainId] = React.useState(-1);
  const [selectedDomainValue, setSelectedDomainValue] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [updateDelete, setUpdateDelete] = React.useState(true);
  const [addDomain, setAddDomain] = React.useState(false);

  const domains = useSelector((state) => state.domain.domains);

  const handleOpen = (id) => {
    setOpen(true);
    setSelectedDomainId(id);
    setSelectedDomainValue(domains[id]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateDomain = (domain, id) => {
    updateDomains(domain, id);
    handleClose();
  };

  const OnDeleteDomain = () => {
    deleteDomain(selectedDomainId);
    handleClose();
  };

  return (
    <div className={style.home}>
      <Container maxWidth="md">
        {addDomain && (
          <Modal open={true} setOpen={setOpen} title={"add new domain"}>
            <DomainCreate />
          </Modal>
        )}
        <Modal
          open={open}
          setOpen={setOpen}
          title={updateDelete ? "update domain" : "Delete Domain"}
        >
          {updateDelete ? (
            <DomainUpdate
              selectedDomainValue={selectedDomainValue}
              setSelectedDomainValue={setSelectedDomainValue}
              updateDomain={updateDomain}
              handleClose={handleClose}
            />
          ) : (
            <DomainDelete
              handleClose={handleClose}
              deleteDomain={OnDeleteDomain}
            />
          )}
        </Modal>
        <div className={style.header}>
          <h1>Domains</h1>
          <Button startIcon={<AddIcon />}>add new domain</Button>
        </div>
        <ul className={style.list}>
          {domains.map((domain, id) => (
            <li key={id}>
              <Domain
                domainId={id}
                domainName={domain}
                openModal={handleOpen}
                setSelectedDomainValue={setSelectedDomainValue}
                setUpdateDelete={setUpdateDelete}
                setSelectedDomainId={setSelectedDomainId}
              />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Home;

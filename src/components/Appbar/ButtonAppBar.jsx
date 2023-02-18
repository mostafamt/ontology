import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          letterSpacing={"2px"}
          sx={{ flexGrow: 1 }}
          onClick={() => navigate("/")}
        >
          ONTOLOGY
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Domains
        </Button>
        <Button color="inherit" onClick={() => navigate("/tree-ui")}>
          Tree UI
        </Button>
        <Button color="inherit" onClick={() => navigate("/sortable-tree")}>
          Sortable Tree
        </Button>
        <Button color="inherit" onClick={() => navigate("/table")}>
          Table
        </Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

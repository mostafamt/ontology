import React from "react";
import PropTypes from "prop-types";
import { useTreeItem } from "@mui/lab";
import { Button, Typography } from "@mui/material";
import clsx from "clsx";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import styles from "./customContent.module.css";

export const CustomContent = React.forwardRef(function CustomContent(
  props,
  ref
) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
    deleteHandler,
    addHandler,
  } = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className={clsx(className, classes.root, {
          [classes.expanded]: expanded,
          [classes.selected]: selected,
          [classes.focused]: focused,
          [classes.disabled]: disabled,
        })}
        onMouseDown={handleMouseDown}
        ref={ref}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
          onClick={handleExpansionClick}
        >
          <div className={classes.iconContainer}>{icon}</div>
          <Typography
            onClick={handleSelectionClick}
            component="h4"
            sx={{
              fontSize: "1.4rem",
            }}
          >
            {label}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            gap: ".4rem",
            zIndex: 1,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => addHandler(nodeId)}
            className={styles.addButton}
          >
            <AddIcon />
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => deleteHandler(nodeId)}
            className={styles.deleteButton}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
});

CustomContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  displayIcon: PropTypes.node,
  expansionIcon: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.node,
  nodeId: PropTypes.string.isRequired,
};

import React from "react";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import {
  add_node,
  delete_node,
  get_parent_path,
  initialData,
} from "../../constants";
import { CustomContent } from "./CustomContent";
import { TextField } from "@mui/material";

function CustomTreeItem(props) {
  const { deleteHandler, addHandler, ...rest } = { ...props };

  return (
    <TreeItem
      ContentComponent={CustomContent}
      {...rest}
      ContentProps={{ deleteHandler: deleteHandler, addHandler: addHandler }}
    />
  );
}

const TreeUI = () => {
  const [data, setData] = React.useState(initialData);
  const [text, setText] = React.useState("");
  const [expanded, setExpanded] = React.useState([]);

  const renderTree = (nodes) => {
    return (
      <CustomTreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        deleteHandler={onDeleteHandler}
        addHandler={onAddHandler}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </CustomTreeItem>
    );
  };

  const expandeTree = (id) => {
    let newExpanded = [];
    if (Array.isArray(expanded)) {
      newExpanded = [...expanded];
    }
    if (!expanded.includes(id)) {
      newExpanded.push(id);
    }
    setExpanded(newExpanded);
  };

  const collapseTree = (id) => {
    console.log(id);
    let newExpanded = [];
    if (Array.isArray(expanded)) {
      newExpanded = [...expanded];
    }
    if (!expanded.includes(id)) {
      newExpanded = newExpanded.filter((el) => el.id !== id);
    }
    setExpanded(newExpanded);
  };

  const onAddHandler = (id) => {
    const { newTree, parentId } = add_node(data, id, text);
    expandeTree(parentId);
    setData(newTree);
    setText("");
  };

  const onDeleteHandler = (id) => {
    collapseTree(String(id));
    const newData = { ...data };
    // get path
    const path = get_parent_path(newData.children, String(id));
    const data1 = delete_node(newData.children, path, String(id));
    let p = newData;
    for (let i = 0; i < path.length; i++) {
      p = p.children[path[i]];
    }
    p.children = data1;
    setData(newData);
  };

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  return (
    <>
      <TextField
        id="outlined-basic"
        label="Enter domain here..."
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{
          margin: "2rem 4rem",
          height: "2rem",
          fontSize: "1.4rem",
        }}
      />

      <TreeView
        aria-label="icon expansion"
        defaultCollapseIcon={<ExpandMoreIcon fontSize="small" />}
        defaultExpandIcon={<ChevronRightIcon fontSize="large" />}
        sx={{ flexGrow: 1, maxWidth: 700, overflowY: "auto", m: "1rem 4rem" }}
        expanded={expanded}
        onNodeToggle={handleToggle}
      >
        {renderTree(data)}
      </TreeView>
    </>
  );
};

export default TreeUI;

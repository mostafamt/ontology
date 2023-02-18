import React from "react";

import { default as STree } from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css"; // This only needs to be imported once in your app
import Tree from "./tree";

class SortableTree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {
          id: 1,
          title: "Chicken",
          children: [{ id: 3, title: "Egg", children: null }],
        },
        {
          id: 2,
          title: "Fish",
          children: [{ id: 4, title: "fingerline", children: null }],
        },
      ],
    };
  }

  render() {
    return (
      <div
        style={{
          height: 400,
          margin: "4rem auto",
          width: "50rem",
        }}
      >
        <Tree />
      </div>
    );
  }
}

export default SortableTree;

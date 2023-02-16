import cuid from "cuid";

export const initialData = {
  id: "root",
  name: "Domains",
  children: [
    {
      id: "1",
      name: "Mathematics",
      children: [
        {
          id: "20",
          name: "Discrete Mathematics",

          children: [
            {
              id: "22",
              name: "Tree",
              children: [
                {
                  id: "23",
                  name: "Graph",
                  children: [
                    {
                      id: "24",
                      name: "Depth-First Search",
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "5",
          name: "Linear Algebra",
          children: [],
        },
        {
          id: "6",
          name: "Calculas",
          children: [],
        },
        {
          id: "7",
          name: "Game Theory",
          children: [],
        },
      ],
    },
    {
      id: "3",
      name: "Science",
      children: [
        {
          id: "4",
          name: "Biology",
          children: [],
        },
        {
          id: "8",
          name: "Physics",
          children: [],
        },
        {
          id: "9",
          name: "Chemistry",
          children: [],
        },
      ],
    },
    {
      id: "10",
      name: "Arts",
      children: [
        {
          id: "12",
          name: "Drawing",
          children: [],
        },
        {
          id: "13",
          name: "Photography",
          children: [],
        },
        {
          id: "14",
          name: "Languages",
          children: [
            {
              id: "15",
              name: "Deutsch Language",
              children: [],
            },
            {
              id: "16",
              name: "English Language",
              children: [],
            },
            {
              id: "17",
              name: "Japanise Language",
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

export const add_node = (tree, id, data) => {
  const newData = { ...tree };
  const path = get_path(newData.children, String(id));
  let parent = newData;
  for (let i = 0; i < path.length; i++) {
    parent = parent.children[path[i]];
  }
  parent.children.unshift({ id: cuid(), name: data, children: [] });
  return { newTree: newData, parentId: parent.id };
};

export const get_path = (tree, nodeId) => {
  let path = [];

  const recursive = (array, item) => {
    let found = false;
    array.forEach((el, idx) => {
      if (found) return;
      if (el.id === item) {
        path.push(idx);
        found = true;
      } else if (Array.isArray(array[idx].children)) {
        path.push(idx);
        let state = recursive(array[idx].children, item);
        if (!state) {
          path.pop();
        } else {
          found = state;
        }
      }
    });
    return found;
  };
  recursive(tree, nodeId);
  return path;
};

export const get_parent_path = (array, item) => {
  let path = [];
  const recursive = (array, item) => {
    let found = false;
    array.forEach((el, idx) => {
      if (found) return;
      if (el.id === item) {
        found = true;
      } else if (Array.isArray(array[idx].children)) {
        path.push(idx);
        let state = recursive(array[idx].children, item);
        if (!state) {
          path.pop();
        } else {
          found = state;
        }
      }
    });
    return found;
  };
  recursive(array, item);
  return path;
};

export const delete_node = (array, path, id) => {
  for (let i = 0; i < path.length; i++) {
    array = array[path[i]].children;
  }
  return array.filter((item) => item.id !== id);
};

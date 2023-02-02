export const ADD_DOMAIN = "ADD_DOMAIN";
export const EDIT_DOMAIN = "EDIT_DOMAIN";
export const DELETE_DOMAIN = "DELETE_DOMAIN";
export const SET_SELECTED_DOMAIN = "SET_SELECTED_DOMAIN";

export const addDomain = (domain) => {
  return {
    type: ADD_DOMAIN,
    payload: domain,
  };
};

export const editDomain = (id, domain) => {
  return {
    type: EDIT_DOMAIN,
    payload: {
      id,
      domain,
    },
  };
};

export const deleteDomain = (id) => {
  return {
    type: DELETE_DOMAIN,
    payload: id,
  };
};

export const setSelectedDomain = (selectedDomain) => {
  return {
    type: SET_SELECTED_DOMAIN,
    payload: selectedDomain,
  };
};

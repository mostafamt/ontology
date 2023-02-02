import {
  ADD_DOMAIN,
  EDIT_DOMAIN,
  DELETE_DOMAIN,
  SET_SELECTED_DOMAIN,
} from "../actions/domainActions";

const initialState = {
  domains: ["Physics", "Biology", "Mathematics"],
  selectedDomain: {
    id: 0,
    value: "",
  },
};

const domainReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case ADD_DOMAIN:
      return {
        ...state,
        domains: [...state.domains, action.payload],
      };
    case EDIT_DOMAIN:
      newState = [...state.domains];
      newState.splice(action.payload.id, 1, action.payload.domain);
      return {
        ...state,
        domains: newState,
      };
    case DELETE_DOMAIN:
      newState = [...state.domains];
      newState.splice(action.payload, 1);
      return {
        ...state,
        domains: newState,
      };
    case SET_SELECTED_DOMAIN:
      return {
        ...state,
        selectedDomain: action.payload,
      };
    default:
      return state;
  }
};

export { domainReducer };

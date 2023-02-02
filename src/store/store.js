import { configureStore } from "@reduxjs/toolkit";
import { domainReducer } from "./reducers/domainReducer";

export const store = configureStore({
  reducer: {
    domain: domainReducer,
  },
});

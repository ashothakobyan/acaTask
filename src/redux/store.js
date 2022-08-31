import { configureStore } from "@reduxjs/toolkit";

import usersSlicer from "./usersSlicer";

export const store = configureStore({
  reducer: {
    [usersSlicer.name]: usersSlicer.reducer,
  },
});

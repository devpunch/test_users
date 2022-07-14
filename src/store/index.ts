import { configureStore } from "@reduxjs/toolkit";
import usersSlicer from "./usersSlicer";

export const store = configureStore({
  reducer: {
    users: usersSlicer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

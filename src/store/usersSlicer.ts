import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { IState, IUsers } from "../types";

const initialState: IState = {
  isLoading: false,
  data: null,
  error: null,
};

export const usersSlicer = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUser: (state) => {
      state.isLoading = true;
    },
    fetchUserResolve: (state, action: PayloadAction<Array<IUsers>>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchUserReject: (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const getUserAsync = () => async (dispatch: Dispatch) => {
  dispatch(fetchUser());
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
    dispatch(fetchUserResolve(data));
  } catch (error) {
    console.log("####: error", error);
    dispatch(fetchUserReject(error));
  }
};

export const { fetchUser, fetchUserResolve, fetchUserReject } =
  usersSlicer.actions;

export const isLoadingUserSelector = (state: RootState) =>
  state.users.isLoading;
export const usersSelector = (state: RootState) => state.users.data;

export default usersSlicer.reducer;

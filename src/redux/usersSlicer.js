import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const usersSlicer = createSlice({
  name: "userSlicer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    changeAddModalState: (state) => {
      state.addPopUpState = !state.addPopUpState;
    },
    changeEditModalState: (state) => {
      state.editPopUpState = !state.editPopUpState;
    },
    deleteUser: (state, action) => {
      const users = [...state.users];
      users.splice(action.payload, 1);
      state.users = users;
    },
    addUser: (state, action) => {
      const users = [...state.users];
      users.push(action.payload);
      state.users = users;
      state.addPopUpState = !state.addPopUpState;
    },
    editUser: (state, action) => {
      state.editingUser = {
        user: action.payload.user,
        index: action.payload.index,
      };
      state.editPopUpState = !state.editPopUpState;
    },
    editUserData: (state, action) => {
      state.editPopUpState = !state.editPopUpState;
      const { user, index } = action.payload;
      const users = [...state.users];
      users[index] = user;
      state.users = users;
    },
  },
});

export const {
  editUserData,
  addUser,
  setUser,
  changeAddModalState,
  deleteUser,
  changeEditModalState,
  editUser,
} = usersSlicer.actions;

export default usersSlicer;

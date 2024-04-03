import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataModal: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataModal: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.dataModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataModal } = dataSlice.actions;

export default dataSlice.reducer;

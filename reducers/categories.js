import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selected_category: 0,
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    set_selected_category(state, action) {
      state.selected_category = action.payload;
    },
  },
});

export const {
  set_selected_category
} = categoriesSlice.actions;

export const categories = categoriesSlice.reducer;


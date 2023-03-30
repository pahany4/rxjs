import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  selected_analysis: [],
}

const analysisSlice = createSlice({
  name: 'analysis',
  initialState: initialState,
  reducers: {
    /** Сброс state */
    reset_analysis(state) {
      Object.assign(state, initialState);
    },
    set_selected_analysis(state, action) {
      state.selected_analysis = action.payload;
    },

    add_selected_analysis(state, action) {
      state.selected_analysis.push(action.payload);
    },

    del_selected_analysis(state, action) {
      state.selected_analysis = state.selected_analysis.filter((analysis) => analysis.id !== action.payload);
      return state;
    },
  },
});

export const {
  set_selected_analysis,add_selected_analysis, del_selected_analysis,
} = analysisSlice.actions;

export const analysis = analysisSlice.reducer;


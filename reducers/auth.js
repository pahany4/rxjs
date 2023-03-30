import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  tokens: {
    access: '',
    access_supabase: '',
    refresh: '',
  },
  visitorId: '',
  is_session: null
}

const authSlice = createSlice({
  name: 'tokens',
  initialState: initialState,
  reducers: {
    set_access(state, action) {
      state.tokens.access = action.payload
    },
    set_is_session(state, action) {
      state.is_session = action.payload
    },
    set_access_supabase(state, action) {
      state.tokens.access_supabase = action.payload
    },
    /*set_refresh(state, action) {
      state.tokens.refresh = action.payload
    },
    set_tokens(state, action) {
      state.tokens.access = action.payload.access
      state.tokens.refresh = action.payload.refresh
    },
    setVisitorId(state, action) {
      state.visitorId = action.payload
    },*/
  },
});

export const {
  set_access, set_is_session, //set_refresh, set_tokens, setVisitorId
  set_access_supabase
} = authSlice.actions;

export const auth = authSlice.reducer;


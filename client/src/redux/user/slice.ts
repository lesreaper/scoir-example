import { createSlice } from '@reduxjs/toolkit';

export interface IUserSlice {
  username: string;
  loggedin: boolean,
  serverError?: boolean,
  token?: string
}

const initialState: IUserSlice = {
  username: '',
  loggedin: false,
  serverError: false,
  token: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signin: (state, action) => {
      return {
        ...state,
        ...action.payload,
        loggedin: true,
        serverError: false,
      }
    },
    signinFailure: (state) => {
      return {
        ...state,
        serverError: true
      }
    }
  },
});

export const { signin, signinFailure } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  password: string;
}

const initialState: UserState = {
  email: "",
  password: "",
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    setPassword: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.password>
    ) => {
      state.password = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setEmail, setPassword } = userSlice.actions;

export default userSlice.reducer;

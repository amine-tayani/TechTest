import { IResult } from "@/types/index";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface IUserState {
  users: IResult[];
  loading: boolean;
}

const initialState: IUserState = {
  users: [],
  loading: false,
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const res = await fetch(
    "https://randomuser.me/api/?inc=name,picture&results=30"
  );
  const data = await res.json();
  return data.results;
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action: PayloadAction<IResult[]>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload.results;
    });
  },
});

// need some typing help here

export const { getUsers } = userSlice.actions;

export default userSlice.reducer;

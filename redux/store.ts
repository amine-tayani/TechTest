import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import {
  useDispatch as useDispatcher,
  useSelector as useSelect,
} from "react-redux";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatcher<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
) => useSelect<RootState, TSelected>(selector);

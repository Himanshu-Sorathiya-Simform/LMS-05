import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "./store.ts";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState;
	dispatch: AppDispatch;
}>();

export { createAppAsyncThunk };

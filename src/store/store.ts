import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice.ts";

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

type RootState = ReturnType<typeof store.getState>;

export { store };
export type { RootState };

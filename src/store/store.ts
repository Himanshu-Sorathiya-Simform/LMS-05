import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice.ts";

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});

export { store };

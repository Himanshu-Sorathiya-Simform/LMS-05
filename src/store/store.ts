import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/themeSlice.ts";
import todoReducer from "../slices/todoSlice.ts";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		todo: todoReducer,
	},
});

store.subscribe(() => {
	const theme = store.getState().theme.theme;

	localStorage.setItem("theme", theme);
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };

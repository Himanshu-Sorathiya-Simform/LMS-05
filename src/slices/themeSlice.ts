import { createSlice } from "@reduxjs/toolkit";

function getTheme() {
	const theme = localStorage.getItem("theme");

	return theme === "dark" || theme === "light" ? theme : "light";
}

const initialState = {
	theme: getTheme(),
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = state.theme === "dark" ? "light" : "dark";
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
export { themeSlice };

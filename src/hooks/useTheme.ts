import { useCallback, useState } from "react";

function useTheme() {
	const [theme, setTheme] = useState(() => {
		const theme = localStorage.getItem("theme");

		return theme ?? "light";
	});

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}, []);

	return { theme, toggleTheme };
}

export { useTheme };

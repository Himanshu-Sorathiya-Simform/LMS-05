import {
	type ReactNode,
	createContext,
	use,
	useCallback,
	useEffect,
	useState,
} from "react";

type ThemeContext = { theme: "light" | "dark"; toggleTheme: () => void };

const ThemeContext = createContext<ThemeContext | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<"light" | "dark">(() => {
		const theme = localStorage.getItem("theme");

		return theme === "dark" || theme === "light" ? theme : "light";
	});

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	}, []);

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const ctxValue = { theme, toggleTheme };

	return <ThemeContext value={ctxValue}>{children}</ThemeContext>;
}

function useTheme() {
	const context = use(ThemeContext);

	if (!context) throw new Error("useTheme must be called inside ThemeProvider");

	return context;
}

export default ThemeProvider;
export { useTheme };

import ThemeProvider from "./context/ThemeContext.tsx";
import AppLayout from "./layouts/AppLayout.tsx";

function App() {
	return (
		<ThemeProvider>
			<AppLayout />
		</ThemeProvider>
	);
}

export default App;

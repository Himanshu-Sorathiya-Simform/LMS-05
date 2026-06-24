import ThemeProvider from "./context/ThemeContext.tsx";
import TodoProvider from "./context/TodoContext.tsx";
import AppLayout from "./layouts/AppLayout.tsx";

function App() {
	return (
		<ThemeProvider>
			<TodoProvider>
				<AppLayout />
			</TodoProvider>
		</ThemeProvider>
	);
}

export default App;

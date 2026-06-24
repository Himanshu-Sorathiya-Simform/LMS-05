import { type TodosActionState, todosReducer } from "@/reducer/todosReducer.ts";
import type { Todo } from "@/types/types.ts";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.ts";
import {
	type ActionDispatch,
	type ReactNode,
	createContext,
	use,
	useEffect,
	useReducer,
} from "react";

type TodoContext = {
	todos: Todo[];
	dispatch: ActionDispatch<[action: TodosActionState]>;
};

const TodoContext = createContext<TodoContext | null>(null);

function TodoProvider({ children }: { children: ReactNode }) {
	const [todos, dispatch] = useReducer(todosReducer, "todos", getLocalStorage);

	useEffect(() => {
		setLocalStorage("todos", todos);
	}, [todos]);

	const ctxValue = { todos, dispatch };

	return <TodoContext value={ctxValue}>{children}</TodoContext>;
}

function useTodo() {
	const context = use(TodoContext);

	if (!context) throw new Error("useTodo must be called inside TodoProvider");

	return context;
}

export default TodoProvider;
export { useTodo };

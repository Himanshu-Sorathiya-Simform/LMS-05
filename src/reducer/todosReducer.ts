import type { Todo } from "../types/types.ts";

interface TodosActionState {
	type: "ADD" | "UPDATE" | "DELETE";
	payload: Todo;
}

function todosReducer(todos: Todo[], action: TodosActionState) {
	switch (action.type) {
		case "ADD": {
			const newTodos = [action.payload, ...todos];

			return newTodos;
		}

		case "UPDATE": {
			const index = todos.findIndex((todo) => todo.id === action.payload.id);

			const newTodos = [
				...todos.slice(0, index),
				action.payload,
				...todos.slice(index + 1),
			];

			return newTodos;
		}

		case "DELETE": {
			const index = todos.findIndex((todo) => todo.id === action.payload.id);

			const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

			return newTodos;
		}

		default:
			throw new Error("Unrecognized action.");
	}
}

export { todosReducer, type TodosActionState };

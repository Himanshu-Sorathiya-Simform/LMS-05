import type { Todo } from "../types/types.ts";

type TodosActionState =
	| {
			type: "ADD";
			payload: Todo;
	  }
	| {
			type: "UPDATE";
			payload: Todo;
	  }
	| {
			type: "DELETE";
			payload: number;
	  };

function todosReducer(todos: Todo[], action: TodosActionState) {
	switch (action.type) {
		case "ADD": {
			const newTodo = action.payload;

			return [newTodo, ...todos];
		}

		case "UPDATE": {
			const updatedTodo = action.payload;

			return todos.filter((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo,
			);
		}

		case "DELETE": {
			const todoId = action.payload;

			return todos.filter((todo) => todo.id !== todoId);
		}

		default:
			throw new Error("Unrecognized action.");
	}
}

export { type TodosActionState, todosReducer };

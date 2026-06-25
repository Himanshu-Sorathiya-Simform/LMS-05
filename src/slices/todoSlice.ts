import { data } from "@/data/data.ts";
import type { Todo } from "@/types/types.ts";
import { getLocalStorageData } from "@/utils/localStorage.ts";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

function getTodo() {
	const todos = getLocalStorageData("todos", data);

	const startOfToday = new Date().setHours(0, 0, 0, 0);
	const endOfToday = new Date().setHours(23, 59, 59, 999);

	function getRemainingTodos() {
		return todos.filter((todo) => {
			if (!todo.completed) {
				return true;
			}

			const completedToday =
				todo.completedAt
				&& todo.completedAt >= startOfToday
				&& todo.completedAt <= endOfToday;

			return completedToday;
		});
	}

	return getRemainingTodos();
}

const initialState = {
	todos: getTodo(),
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},

		updateTodo: (state, action: PayloadAction<Todo>) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? action.payload : todo,
			);
		},

		deleteTodo: (state, action: PayloadAction<Todo>) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload.id,
			);
		},
	},
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

import { data } from "@/data/data.ts";
import { createAppAsyncThunk } from "@/store/asyncThunk.ts";
import type { Todo } from "@/types/types.ts";
import { getLocalStorageData } from "@/utils/localStorage.ts";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
	todos: Todo[];
	status: "idle" | "pending" | "success" | "error";
	error: string | null;
};

const fetchTodos = createAppAsyncThunk("todo/fetchTodos", async () => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 2500);
	});

	const todos = getLocalStorageData("todos", data);

	const startOfToday = new Date().setHours(0, 0, 0, 0);
	const endOfToday = new Date().setHours(23, 59, 59, 999);

	const remainingTodos = todos.filter((todo) => {
		if (!todo.completed) {
			return true;
		}

		const completedToday =
			todo.completedAt
			&& todo.completedAt >= startOfToday
			&& todo.completedAt <= endOfToday;

		return completedToday;
	});

	return remainingTodos;
});

const addTodo = createAppAsyncThunk("todo/addTodo", async (newTodo: Todo) => {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve(1);
		}, 2500);
	});

	return newTodo;
});

const updateTodo = createAppAsyncThunk(
	"todo/updateTodo",
	async (updatedTodo: Todo) => {
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 2500);
		});

		return updatedTodo;
	},
);

const deleteTodo = createAppAsyncThunk(
	"todo/deleteTodo",
	async (deletedTodoId: number) => {
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(1);
			}, 2500);
		});

		return deletedTodoId;
	},
);

const initialState: InitialState = {
	todos: [],
	status: "idle",
	error: null,
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTodos.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchTodos.fulfilled, (state, action) => {
				state.status = "success";
				state.todos.push(...action.payload);
			})
			.addCase(fetchTodos.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message ?? "Unknown Error";
			})
			.addCase(addTodo.pending, (state) => {
				state.status = "pending";
			})
			.addCase(addTodo.fulfilled, (state, action) => {
				state.status = "success";
				state.todos.push(action.payload);
			})
			.addCase(addTodo.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message ?? "Unknown Error";
			})
			.addCase(updateTodo.pending, (state) => {
				state.status = "pending";
			})
			.addCase(updateTodo.fulfilled, (state, action) => {
				state.status = "success";
				state.todos = state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				);
			})
			.addCase(updateTodo.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message ?? "Unknown Error";
			})
			.addCase(deleteTodo.pending, (state) => {
				state.status = "pending";
			})
			.addCase(deleteTodo.fulfilled, (state, action) => {
				state.status = "success";
				state.todos = state.todos.filter((todo) =>
					todo.id === action.payload ? action.payload : todo,
				);
			})
			.addCase(deleteTodo.rejected, (state, action) => {
				state.status = "error";
				state.error = action.error.message ?? "Unknown Error";
			});
	},
});

export { addTodo, deleteTodo, fetchTodos, updateTodo };
export default todoSlice.reducer;

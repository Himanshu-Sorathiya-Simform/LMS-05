import { useAppDispatch } from "@/hooks/hooks.ts";
import { updateTodo } from "@/slices/todoSlice.ts";
import { useState } from "react";
import type { Todo } from "../../types/types.ts";
import { validate } from "../../utils/validateTodoFormResponse.ts";
import { Button } from "../ui/button.tsx";
import { Field, FieldLabel } from "../ui/field.tsx";
import Icon from "../ui/Icon.tsx";
import { Input } from "../ui/input.tsx";
import Select from "../ui/Select.tsx";

interface EditTodoModalProps {
	todo: Todo | undefined;
	handleCloseModal: () => void;
}

function EditTodoModal({ todo, handleCloseModal }: EditTodoModalProps) {
	const [error, setError] = useState("");

	const dispatch = useAppDispatch();

	function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!todo) return;

		const formData = new FormData(e.currentTarget);
		const titleVal = formData.get("todo-title");
		const descriptionVal = formData.get("todo-description");
		const completedVal =
			formData.get("todo-completed") === "true" ? true : false;

		if (typeof titleVal !== "string" || typeof descriptionVal !== "string")
			return;

		const { isValid, error } = validate([
			["title", titleVal],
			["description", descriptionVal],
			["completed", completedVal],
		]);

		if (isValid === true) {
			dispatch(
				updateTodo({
					...todo,
					title: titleVal,
					description: descriptionVal,
					completed: completedVal,
					completedAt: completedVal === true ? Date.now() : -1,
				}),
			);
			handleCloseModal();
		} else {
			setError(error);
		}
	}

	if (!todo) return;

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Edit "{todo.title}" task</p>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-4"
			>
				<p className="text-red-600">{error}</p>

				<Field className="text-xl">
					<FieldLabel htmlFor="fieldgroup-title">ToDo Title</FieldLabel>
					<Input
						id="fieldgroup-title"
						name="todo-title"
						placeholder="Enter task title here..."
						defaultValue={todo.title}
						autoFocus={true}
						className="h-auto rounded-full bg-neutral-50 px-5 py-3 text-xl! text-neutral-800 ring-1 ring-neutral-400 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:placeholder:text-neutral-500"
					/>
				</Field>

				<Field className="text-xl">
					<FieldLabel htmlFor="fieldgroup-description">
						ToDo Description
					</FieldLabel>
					<Input
						id="fieldgroup-description"
						name="todo-description"
						placeholder="Enter task description here..."
						defaultValue={todo.description}
						className="h-auto rounded-full bg-neutral-50 px-5 py-3 text-xl! text-neutral-800 ring-1 ring-neutral-400 placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:placeholder:text-neutral-500"
					/>
				</Field>

				<Select
					name="todo-completed"
					label="Task Completed Status"
					defaultValue={`${todo.completed}`}
					className="rounded-full bg-neutral-50 px-5 py-3 text-xl text-neutral-800 ring-1 ring-neutral-400 transition placeholder:text-neutral-400 focus-visible:ring-2 focus-visible:ring-neutral-700 focus-visible:placeholder:text-neutral-500"
				/>

				<div className="mt-2 flex justify-end gap-2">
					<Button
						className="box-content cursor-pointer rounded-md bg-stone-300 px-4 py-1 text-black ring-0 duration-75 hover:bg-stone-300 hover:brightness-90 focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:brightness-90"
						onClick={handleCloseModal}
					>
						Cancel
					</Button>

					<Button
						type="submit"
						className="box-content cursor-pointer rounded-md bg-orange-300 px-4 py-1 text-black ring-0 hover:bg-orange-300 hover:brightness-90 focus-visible:ring-2 focus-visible:ring-orange-800 focus-visible:brightness-90"
					>
						Update
					</Button>
				</div>
			</form>

			<Button
				className="absolute top-0 right-0 box-content cursor-pointer rounded-full bg-transparent py-1.5 text-lg text-black ring-0 duration-75 hover:bg-stone-200 focus-visible:bg-stone-200 focus-visible:ring-1 focus-visible:ring-stone-800"
				onClick={handleCloseModal}
			>
				<Icon
					id="close"
					className="size-6"
				/>
			</Button>
		</div>
	);
}

export default EditTodoModal;

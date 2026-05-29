import { type ActionDispatch, useState } from "react";
import type { TodosActionState } from "../../reducer/todosReducer.ts";
import type { Todo } from "../../types/types.ts";
import { validate } from "../../utils/validateTodoFormResponse.ts";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";
import Input from "../ui/Input.tsx";
import Select from "../ui/Select.tsx";

interface EditTodoModalProps {
	todo: Todo | undefined;
	handleEdit: ActionDispatch<[action: TodosActionState]>;
	handleCloseModal: () => void;
}

function EditTodoModal({ todo, handleCloseModal, handleEdit }: EditTodoModalProps) {
	const [error, setError] = useState("");

	if (!todo) return;

	function handleFormSubmit(e) {
		e.preventDefault();

		if (!todo) return;

		const formData = new FormData(e.currentTarget);
		const titleVal = formData.get("todo-title") as string;
		const descriptionVal = formData.get("todo-description") as string;
		const completedVal = (
			formData.get("todo-completed") === "true" ?
				true
			:	false) as boolean;

		const isValid = validate([
			["title", titleVal],
			["description", descriptionVal],
			["completed", completedVal],
		]);

		if (isValid === true) {
			handleEdit({
				type: "UPDATE",
				payload: {
					...todo,
					title: titleVal,
					description: descriptionVal,
					completed: completedVal,
				},
			});
			handleCloseModal();
		} else {
			setError(isValid ?? "");
		}
	}

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Edit "{todo.title}" task</p>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-4"
			>
				<p className="text-red-600">{error}</p>

				<Input
					name="todo-title"
					label="Task Title"
					defaultValue={todo.title}
					placeholder="Enter task title here..."
					autoFocus={true}
					className="bg-neutral-50 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				/>

				<Input
					name="todo-description"
					label="Task Description"
					defaultValue={todo.description ?? ""}
					placeholder="Enter task description here..."
					className="bg-neutral-50 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				/>

				<Select
					name="todo-completed"
					label="Task Completed Status"
					defaultValue={`${todo.completed}`}
					className="rounded-full bg-neutral-50 px-5 py-3 text-xl text-neutral-800 outline-1 outline-neutral-400 transition placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				/>

				<div className="mt-2 flex justify-end gap-2">
					<Button
						className="rounded-md bg-stone-300 px-4 py-2 outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800"
						handler={handleCloseModal}
					>
						Cancel
					</Button>

					<Button className="rounded-md bg-orange-300 px-4 py-2 outline-0 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-orange-800">
						Update
					</Button>
				</div>
			</form>

			<Button
				className="absolute top-0 right-0 rounded-full p-1 outline-0 duration-75 hover:bg-stone-200 focus:bg-stone-200 focus-visible:outline-1 focus-visible:outline-stone-800"
				handler={handleCloseModal}
			>
				<Icon
					id="close"
					className="h-6 w-6"
				/>
			</Button>
		</div>
	);
}

export default EditTodoModal;

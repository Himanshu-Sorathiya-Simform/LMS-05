import { type ActionDispatch, useState } from "react";
import type { TodosActionState } from "../../reducer/todosReducer.ts";
import { validate } from "../../utils/validateTodoFormResponse.ts";
import { Button } from "../ui/button.tsx";
import Icon from "../ui/Icon.tsx";
import Input from "../ui/Input.tsx";

interface CreateTodoModalProps {
	handleCloseModal: () => void;
	handleCreate: ActionDispatch<[action: TodosActionState]>;
}

function CreateTodoModal({ handleCloseModal, handleCreate }: CreateTodoModalProps) {
	const [error, setError] = useState("");

	function handleFormSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const titleVal = formData.get("todo-title");
		const descriptionVal = formData.get("todo-description");

		if (typeof titleVal !== "string" || typeof descriptionVal !== "string")
			return;

		const { isValid, error } = validate([
			["title", titleVal],
			["description", descriptionVal],
		]);

		if (isValid === true) {
			handleCreate({
				type: "ADD",
				payload: {
					id: Math.random(),
					title: titleVal,
					description: descriptionVal,
					createdAt: Date.now(),
					completed: false,
					completedAt: -1,
				},
			});
			handleCloseModal();
		} else {
			setError(error);
		}
	}

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Create new todo task</p>

			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-3"
			>
				<p className="text-red-600">{error}</p>

				<Input
					name="todo-title"
					label="Task Title"
					placeholder="Enter task title here..."
					autoFocus={true}
					className="bg-neutral-50 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				/>

				<Input
					name="todo-description"
					label="Task Description"
					placeholder="Enter task description here..."
					className="bg-neutral-50 text-neutral-800 outline-1 outline-neutral-400 placeholder:text-neutral-400 focus:outline-2 focus:outline-neutral-700 focus:placeholder:text-neutral-500"
				/>

				<div className="mt-2 flex justify-end gap-2">
					<Button
						className="box-content cursor-pointer rounded-md bg-stone-300 px-4 py-1 text-black outline-0 duration-75 hover:bg-stone-300 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800"
						onClick={handleCloseModal}
					>
						Cancel
					</Button>

					<Button
						type="submit"
						className="box-content cursor-pointer rounded-md bg-orange-300 px-4 py-1 text-black outline-0 hover:bg-orange-300 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-orange-800"
					>
						Create
					</Button>
				</div>
			</form>

			<Button
				className="absolute top-0 right-0 box-content cursor-pointer rounded-full bg-transparent py-1.5 text-lg text-black outline-0 duration-75 hover:bg-stone-200 focus:bg-stone-200 focus-visible:outline-1 focus-visible:outline-stone-800"
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

export default CreateTodoModal;

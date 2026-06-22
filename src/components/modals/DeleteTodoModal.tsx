import { useTodo } from "@/context/TodoContext.tsx";
import type { Todo } from "../../types/types.ts";
import { Button } from "../ui/button.tsx";
import Icon from "../ui/Icon.tsx";

interface DeleteTodoModalProps {
	todo: Todo | undefined;

	handleCloseModal: () => void;
}

function DeleteTodoModal({ todo, handleCloseModal }: DeleteTodoModalProps) {
	const { dispatch } = useTodo();

	if (!todo) return;

	function handleTodoModalDelete() {
		if (!todo) return;

		dispatch({ type: "DELETE", payload: todo });

		handleCloseModal();
	}

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Delete "{todo.title}"?</p>

			<p>Please confirm deletion of {todo.title}.</p>

			<div className="flex justify-end gap-2">
				<Button
					className="box-content cursor-pointer rounded-md bg-stone-300 px-4 py-1 text-black ring-0 duration-75 hover:bg-stone-300 hover:brightness-90 focus-visible:ring-2 focus-visible:ring-stone-800 focus-visible:brightness-90"
					onClick={handleCloseModal}
				>
					Cancel
				</Button>

				<Button
					className="box-content cursor-pointer rounded-md bg-orange-300 px-4 py-1 text-black ring-0 hover:bg-orange-300 hover:brightness-90 focus-visible:ring-2 focus-visible:ring-orange-800 focus-visible:brightness-90"
					onClick={handleTodoModalDelete}
				>
					Delete
				</Button>
			</div>

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

export default DeleteTodoModal;

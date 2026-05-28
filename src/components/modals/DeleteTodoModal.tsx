import type { Todo } from "../../types/types.ts";
import Button from "../ui/Button.tsx";
import Icon from "../ui/Icon.tsx";

function DeleteTodoModal({
	todo,
	handleCloseModal,
	handleDelete,
}: {
	todo: Todo | undefined;
	handleCloseModal: () => void;
	handleDelete: () => void;
}) {
	if (!todo) return;

	return (
		<div className="relative flex flex-col gap-7">
			<p className="text-xl">Delete "{todo.title}"?</p>

			<p>Please confirm deletion of {todo.title}.</p>

			<div className="flex justify-end gap-2">
				<Button
					className="rounded-md bg-stone-300 px-4 py-2 outline-0 duration-75 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-stone-800"
					handler={handleCloseModal}
				>
					Cancel
				</Button>

				<Button
					className="rounded-md bg-orange-300 px-4 py-2 outline-0 hover:brightness-90 focus:brightness-90 focus-visible:outline-2 focus-visible:outline-orange-800"
					handler={handleDelete}
				>
					Delete
				</Button>
			</div>

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

export default DeleteTodoModal;

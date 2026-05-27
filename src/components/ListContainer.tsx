import { type RefObject, useRef, useState } from "react";
import { data } from "../data/data.ts";
import type { Todo } from "../types/types.ts";
import Modal from "./layouts/ModalLayout.tsx";
import DeleteModal from "./modals/DeleteModal.tsx";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";
import Input from "./ui/Input.tsx";

function ListContainer() {
	const [todos] = useState(data);
	const [showModal, setShowModal] = useState<{
		type: string;
		data: number | undefined;
	}>({ type: "", data: undefined });

	const ref: RefObject<HTMLDialogElement | null> = useRef(null);

	function handleShowModal(type: string, data: number) {
		if (!ref.current) return;

		setShowModal({ type, data });
		ref.current.showModal();
	}

	function handleCloseModal() {
		if (!ref.current) return;

		setShowModal({ type: "", data: undefined });
		ref.current.close();
	}

	const selectedTodo =
		showModal.data ?
			todos.find((todo) => todo.id === showModal.data)
		:	undefined;

	return (
		<main className="flex flex-col gap-2 overflow-hidden">
			<ul className="flex max-h-140 scrollbar-thin flex-col gap-2 overflow-y-scroll">
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						todo={todo}
						handleShowModal={handleShowModal}
					/>
				))}
			</ul>

			<Modal
				ref={ref}
				className="m-auto"
				onClose={handleCloseModal}
			>
				{showModal.type === "delete" && (
					<DeleteModal
						handleDelete={() => {
							console.log(showModal.data);
						}}
						handleCloseModal={handleCloseModal}
						todo={selectedTodo}
					/>
				)}
			</Modal>
		</main>
	);
}

function ListItem({
	todo,
	handleShowModal,
}: {
	todo: Todo;
	handleShowModal: (type: string, data: number) => void;
}) {
	return (
		<li className="flex max-w-2xl items-start gap-3 rounded-md border-gray-500 px-2 py-2">
			<Input
				type="checkbox"
				label={`Checkbox for ${todo.title}`}
				className="mt-2 scale-125 rounded-lg focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-500"
			/>

			<div className="flex flex-1 flex-col gap-1">
				<label
					htmlFor={`${todo.id}_task_checkbox`}
					className="max-w-132 truncate text-lg"
				>
					{todo.title}
				</label>

				{todo.description && (
					<p className="max-w-132 truncate font-light text-gray-600">
						{todo.description}
					</p>
				)}
			</div>

			<Button
				className="mt-2 cursor-pointer rounded-lg p-1.5 duration-100 hover:bg-neutral-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Edit Todo"
				handler={() => handleShowModal("edit", todo.id)}
			>
				<Icon
					id="edit"
					className="h-6 w-6"
				></Icon>
			</Button>

			<Button
				className="mt-2 cursor-pointer rounded-lg p-1.5 duration-100 hover:bg-neutral-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Delete Todo"
				handler={() => handleShowModal("delete", todo.id)}
			>
				<Icon
					id="delete"
					className="h-6 w-6 stroke-1 text-red-500"
				></Icon>
			</Button>
		</li>
	);
}

export default ListContainer;

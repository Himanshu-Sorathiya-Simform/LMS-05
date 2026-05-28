import { type RefObject, useRef, useState } from "react";
import { data } from "../data/data.ts";
import type { Todo } from "../types/types.ts";
import ModalLayout from "./layouts/ModalLayout.tsx";
import ListItem from "./ListItem.tsx";
import DeleteModal from "./modals/DeleteModal.tsx";

function ListContainer() {
	const [todos] = useState(data);
	const [modalState, setModalState] = useState<{
		type: string;
		data: Todo | undefined;
	}>({ type: "", data: undefined });

	const ref: RefObject<HTMLDialogElement | null> = useRef(null);

	function handleShowModal(type: string, data: Todo) {
		if (!ref.current) return;

		setModalState({ type, data });
		ref.current.showModal();
	}

	function handleCloseModal() {
		if (!ref.current) return;

		setModalState({ type: "", data: undefined });
		ref.current.close();
	}

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

			<ModalLayout
				ref={ref}
				className="m-auto"
				onClose={handleCloseModal}
			>
				{modalState.type === "delete" && (
					<DeleteModal
						handleDelete={() => {
							console.log(modalState.data);
						}}
						handleCloseModal={handleCloseModal}
						todo={modalState.data}
					/>
				)}
			</ModalLayout>
		</main>
	);
}

export default ListContainer;

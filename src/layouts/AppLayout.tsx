import { type RefObject, useReducer, useRef, useState } from "react";
import Header from "../components/Header.tsx";
import ListContainer from "../components/ListContainer.tsx";
import CreateTodoModal from "../components/modals/CreateTodoModal.tsx";
import DeleteTodoModal from "../components/modals/DeleteTodoModal.tsx";
import EditTodoModal from "../components/modals/EditTodoModal.tsx";
import { data } from "../data/data.ts";
import { todosReducer } from "../reducer/todosReducer.ts";
import type { Todo } from "../types/types.ts";
import ModalLayout from "./ModalLayout.tsx";

function AppLayout() {
	const [todos, dispatch] = useReducer(todosReducer, data);
	const [modalState, setModalState] = useState<{
		type: string;
		data: Todo | undefined;
	}>({ type: "", data: undefined });

	const ref: RefObject<HTMLDialogElement | null> = useRef(null);

	function handleShowModal(type: string, data?: Todo) {
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
		<>
			<section className="flex h-screen w-screen items-center justify-center bg-white p-6">
				<div className="flex h-11/12 w-2xl max-w-full flex-col items-center gap-8">
					<Header handleShowModal={handleShowModal} />

					<ListContainer
						todos={todos}
						handleShowModal={handleShowModal}
						handleEdit={dispatch}
					/>
				</div>
			</section>

			<ModalLayout
				ref={ref}
				className="m-auto"
				onClose={handleCloseModal}
			>
				{modalState.type === "create" && (
					<CreateTodoModal
						handleCreate={dispatch}
						handleCloseModal={handleCloseModal}
					/>
				)}
				{modalState.type === "edit" && (
					<EditTodoModal
						handleEdit={dispatch}
						handleCloseModal={handleCloseModal}
						todo={modalState.data}
					/>
				)}
				{modalState.type === "delete" && (
					<DeleteTodoModal
						handleDelete={dispatch}
						handleCloseModal={handleCloseModal}
						todo={modalState.data}
					/>
				)}
			</ModalLayout>
		</>
	);
}

export default AppLayout;

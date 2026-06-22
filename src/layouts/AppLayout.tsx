import { useEffect, useReducer } from "react";
import Header from "../components/Header.tsx";
import ListContainer from "../components/ListContainer.tsx";
import ListItem from "../components/ListItem.tsx";
import CreateTodoModal from "../components/modals/CreateTodoModal.tsx";
import DeleteTodoModal from "../components/modals/DeleteTodoModal.tsx";
import EditTodoModal from "../components/modals/EditTodoModal.tsx";
import { useModal } from "../hooks/useModal.ts";
import { todosReducer } from "../reducer/todosReducer.ts";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.ts";
import ModalLayout from "./ModalLayout.tsx";

function AppLayout() {
	const [todos, dispatch] = useReducer(todosReducer, "todos", getLocalStorage);

	const { ref, modalState, handleShowModal, handleCloseModal } = useModal();

	useEffect(() => {
		setLocalStorage("todos", todos);
	}, [todos]);

	return (
		<>
			<section className="flex min-h-screen w-full scrollbar-gutter-both justify-center bg-white px-6 pb-6">
				<div className="flex h-full w-2xl max-w-full flex-col items-center gap-8">
					<Header handleShowModal={handleShowModal} />

					<ListContainer>
						{todos.map((todo) => (
							<ListItem
								key={todo.id}
								todo={todo}
								handleShowModal={handleShowModal}
								handleEdit={dispatch}
							/>
						))}
					</ListContainer>
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

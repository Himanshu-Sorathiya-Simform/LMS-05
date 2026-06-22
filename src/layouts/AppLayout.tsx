import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/context/ThemeContext.tsx";
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

	const { theme, toggleTheme } = useTheme();
	const { ref, modalState, handleShowModal, handleCloseModal } = useModal();

	useEffect(() => {
		setLocalStorage("todos", todos);
	}, [todos]);

	return (
		<>
			<section
				className={`${theme === "dark" ? "dark" : ""} bg-secondary text-secondary-foreground relative flex min-h-screen w-full scrollbar-gutter-both justify-center px-6 pb-6 transition-colors`}
			>
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

				<Button
					className="absolute bottom-5 left-5 cursor-pointer"
					onClick={toggleTheme}
				>
					Toggle to {theme === "light" ? "Dark" : "Light"}
				</Button>

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
			</section>
		</>
	);
}

export default AppLayout;

import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/context/ThemeContext.tsx";
import { useTodo } from "@/context/TodoContext.tsx";
import Header from "../components/Header.tsx";
import ListContainer from "../components/ListContainer.tsx";
import ListItem from "../components/ListItem.tsx";
import CreateTodoModal from "../components/modals/CreateTodoModal.tsx";
import DeleteTodoModal from "../components/modals/DeleteTodoModal.tsx";
import EditTodoModal from "../components/modals/EditTodoModal.tsx";
import { useModal } from "../hooks/useModal.ts";
import ModalLayout from "./ModalLayout.tsx";

function AppLayout() {
	const { theme, toggleTheme } = useTheme();
	const { todos } = useTodo();
	const { ref, modalState, handleShowModal, handleCloseModal } = useModal();

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
							/>
						))}
					</ListContainer>
				</div>

				<Button
					className="fixed bottom-5 left-5 cursor-pointer"
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
						<CreateTodoModal handleCloseModal={handleCloseModal} />
					)}
					{modalState.type === "edit" && (
						<EditTodoModal
							handleCloseModal={handleCloseModal}
							todo={modalState.data}
						/>
					)}
					{modalState.type === "delete" && (
						<DeleteTodoModal
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

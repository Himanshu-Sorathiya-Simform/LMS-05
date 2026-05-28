import { type RefObject, useRef, useState } from "react";
import type { Todo } from "../types/types.ts";
import ModalLayout from "./layouts/ModalLayout.tsx";
import CreateTodoModal from "./modals/CreateTodoModal.tsx";
import Today from "./Today.tsx";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";

function Header() {
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
		<header className="flex flex-col items-start gap-7 self-start p-2">
			<h1 className="font-sans text-3xl font-semibold">To-Do</h1>

			<Today />

			<div className="flex gap-2">
				<Button
					className="gap-1 rounded-full bg-blue-600 px-4 py-2 font-semibold text-white duration-100 hover:bg-blue-700 focus:bg-blue-700 focus:outline-1 focus:outline-blue-700"
					handler={() => handleShowModal("create")}
				>
					<Icon
						id="create"
						className="h-6 w-6 text-white"
					/>

					<span>Add new task</span>
				</Button>
			</div>

			<ModalLayout
				ref={ref}
				className="m-auto"
				onClose={handleCloseModal}
			>
				{modalState.type === "create" && (
					<CreateTodoModal
						handleCreate={() => {
							console.log(modalState.data);
						}}
						handleCloseModal={handleCloseModal}
					/>
				)}
			</ModalLayout>
		</header>
	);
}

export default Header;

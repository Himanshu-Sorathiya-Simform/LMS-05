import { memo } from "react";
import type { Todo } from "../types/types.ts";
import Today from "./Today.tsx";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";

interface HeaderProps {
	handleShowModal: (type: string, data?: Todo) => void;
}

const Header = memo(function Header({ handleShowModal }: HeaderProps) {
	function showCreateModal() {
		handleShowModal("create");
	}

	return (
		<header className="sticky top-0 z-10 flex w-full flex-col items-start gap-7 self-start bg-white px-2 pt-16 pb-8">
			<h1 className="font-sans text-3xl font-semibold">To-Do</h1>

			<Today />

			<div className="flex gap-2">
				<Button
					className="gap-1 rounded-full bg-blue-600 px-4 py-2 font-semibold text-white duration-100 hover:bg-blue-700 focus:bg-blue-700 focus:outline-1 focus:outline-blue-700"
					onClick={showCreateModal}
				>
					<Icon
						id="create"
						className="h-6 w-6 text-white"
					/>

					<span>Add new task</span>
				</Button>
			</div>
		</header>
	);
});

export default Header;

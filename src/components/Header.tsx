import { memo } from "react";
import type { Todo } from "../types/types.ts";
import Today from "./Today.tsx";
import { Button } from "./ui/button.tsx";
import Icon from "./ui/Icon.tsx";

interface HeaderProps {
	handleShowModal: (type: string, data?: Todo) => void;
}

const Header = memo(function Header({ handleShowModal }: HeaderProps) {
	function showCreateModal() {
		handleShowModal("create");
	}

	return (
		<header className="bg-secondary text-secondary-foreground sticky top-0 z-10 mt-32 flex w-full flex-col items-start gap-7 self-start px-2 pb-8 transition-colors">
			<h1 className="font-sans text-3xl font-semibold">To-Do</h1>

			<Today />

			<div className="flex gap-2">
				<Button
					className="box-content flex cursor-pointer items-center justify-center gap-1 rounded-full bg-blue-600 px-4 py-1 font-semibold text-white transition hover:bg-blue-500 focus-visible:bg-blue-500 focus-visible:ring-0"
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

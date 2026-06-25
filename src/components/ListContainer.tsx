import { useAppSelector } from "@/hooks/hooks.ts";
import { type ReactNode } from "react";
import { Spinner } from "./ui/spinner.tsx";

interface ListContainerProps {
	children: ReactNode;
}

function ListContainer({ children }: ListContainerProps) {
	const todosStatus = useAppSelector((state) => state.todo.status);

	return (
		<main className="flex w-full flex-col gap-2">
			{todosStatus === "pending" ?
				<Spinner className="mx-auto" />
			:	<ul
					id="bar-container"
					className="flex scrollbar-thin flex-col gap-2"
				>
					{children}
				</ul>
			}
		</main>
	);
}

export default ListContainer;

import { type ReactNode } from "react";

interface ListContainerProps {
	children: ReactNode;
}

function ListContainer({ children }: ListContainerProps) {
	return (
		<main className="flex w-full flex-col gap-2 overflow-hidden">
			<ul className="flex scrollbar-thin flex-col gap-2 overflow-y-scroll">
				{children}
			</ul>
		</main>
	);
}

export default ListContainer;

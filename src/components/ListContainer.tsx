import type { Todo } from "../types/types.ts";
import ListItem from "./ListItem.tsx";

function ListContainer({
	todos,
	handleShowModal,
}: {
	todos: Todo[];
	handleShowModal: (type: string, data?: Todo) => void;
}) {
	return (
		<main className="flex flex-col gap-2 overflow-hidden">
			<ul className="flex scrollbar-thin flex-col gap-2 overflow-y-scroll">
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						todo={todo}
						handleShowModal={handleShowModal}
					/>
				))}
			</ul>
		</main>
	);
}

export default ListContainer;

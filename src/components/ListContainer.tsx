import type { ActionDispatch } from "react";
import type { TodosActionState } from "../reducer/todosReducer.ts";
import type { Todo } from "../types/types.ts";
import ListItem from "./ListItem.tsx";

interface ListContainerProps {
	todos: Todo[];
	handleShowModal: (type: string, data?: Todo) => void;
	handleEdit: ActionDispatch<[action: TodosActionState]>;
}

function ListContainer({ todos, handleShowModal, handleEdit }: ListContainerProps) {
	return (
		<main className="flex w-full flex-col gap-2 overflow-hidden">
			<ul className="flex scrollbar-thin flex-col gap-2 overflow-y-scroll">
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						todo={todo}
						handleShowModal={handleShowModal}
						handleEdit={handleEdit}
					/>
				))}
			</ul>
		</main>
	);
}

export default ListContainer;

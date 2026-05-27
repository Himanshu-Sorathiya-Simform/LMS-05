import { useState } from "react";
import { data } from "../data/data.ts";
import type { Todo } from "../types/types.ts";

function ListContainer() {
	const [todos, setTodos] = useState(data);

	return (
		<main className="flex flex-col gap-2">
			<ul className="flex flex-col gap-1">
				{todos.map((todo) => (
					<ListItem todo={todo} />
				))}
			</ul>
		</main>
	);
}

function ListItem({ todo }: { todo: Todo }) {
	return <li>{todo.title}</li>;
}

export default ListContainer;

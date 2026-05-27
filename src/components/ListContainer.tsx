import { useState } from "react";
import { data } from "../data/data.ts";
import type { Todo } from "../types/types.ts";
import Button from "./Button.tsx";
import Icon from "./Icon.tsx";
import Input from "./Input.tsx";

function ListContainer() {
	const [todos, setTodos] = useState(data);

	return (
		<main className="flex flex-col gap-2">
			<ul className="flex flex-col gap-2">
				{todos.map((todo) => (
					<ListItem todo={todo} />
				))}
			</ul>
		</main>
	);
}

function ListItem({ todo }: { todo: Todo }) {
	return (
		<li className="max-w-2xl border-gray-500 flex items-start gap-3 py-2 rounded-md">
			<Input
				type="checkbox"
				className="mt-2 scale-125 focus-visible:outline-offset-1 focus-visible:outline-gray-500 rounded-lg focus-visible:outline-1 "
			/>

			<div className="flex flex-col gap-1 flex-1">
				<p className=" text-lg max-w-132 truncate">{todo.title}</p>

				<p className="font-light text-gray-600 max-w-132 truncate">
					{todo.description}
				</p>
			</div>

			<Button className="mt-2 hover:bg-gray-200 focus-visible:outline-1 focus-visible:outline-gray-500 p-1.5 rounded-lg transition duration-100 cursor-pointer">
				<Icon
					id="edit"
					className="h-6 w-6  "
				></Icon>
			</Button>

			<Button className="mt-2 hover:bg-gray-200 focus-visible:outline-1 focus-visible:outline-gray-500 p-1.5 rounded-lg transition duration-100 cursor-pointer">
				<Icon
					id="delete"
					className="h-6 w-6 text-red-500 stroke-1 "
				></Icon>
			</Button>
		</li>
	);
}

export default ListContainer;

import { useState } from "react";
import { data } from "../data/data.ts";
import type { Todo } from "../types/types.ts";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";
import Input from "./ui/Input.tsx";

function ListContainer() {
	const [todos] = useState(data);

	return (
		<main className="flex flex-col gap-2 overflow-hidden">
			<ul className="flex max-h-96 flex-col gap-2 overflow-y-scroll">
				{todos.map((todo) => (
					<ListItem
						key={todo.id}
						todo={todo}
					/>
				))}
			</ul>
		</main>
	);
}

function ListItem({ todo }: { todo: Todo }) {
	return (
		<li className="flex max-w-2xl items-start gap-3 rounded-md border-gray-500 px-2 py-2">
			<Input
				type="checkbox"
				label={`Checkbox for ${todo.title}`}
				className="mt-2 scale-125 rounded-lg focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-500"
			/>

			<div className="flex flex-1 flex-col gap-1">
				<label
					htmlFor={`${todo.id}_task_checkbox`}
					className="max-w-132 truncate text-lg"
				>
					{todo.title}
				</label>

				{todo.description && (
					<p className="max-w-132 truncate font-light text-gray-600">
						{todo.description}
					</p>
				)}
			</div>

			<Button
				className="mt-2 cursor-pointer rounded-lg p-1.5 transition duration-100 hover:bg-gray-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Edit Todo"
			>
				<Icon
					id="edit"
					className="h-6 w-6"
				></Icon>
			</Button>

			<Button
				className="mt-2 cursor-pointer rounded-lg p-1.5 transition duration-100 hover:bg-gray-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Delete Todo"
			>
				<Icon
					id="delete"
					className="h-6 w-6 stroke-1 text-red-500"
				></Icon>
			</Button>
		</li>
	);
}

export default ListContainer;

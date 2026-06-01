import { type ActionDispatch, memo } from "react";
import type { TodosActionState } from "../reducer/todosReducer.ts";
import type { Todo } from "../types/types.ts";
import Button from "./ui/Button.tsx";
import Icon from "./ui/Icon.tsx";
import Input from "./ui/Input.tsx";

interface ListItemProps {
	todo: Todo;
	handleShowModal: (type: string, data?: Todo) => void;
	handleEdit: ActionDispatch<[action: TodosActionState]>;
}

const ListItem = memo(function ListItem({
	todo,
	handleShowModal,
	handleEdit,
}: ListItemProps) {
	return (
		<li className="flex items-start gap-3 rounded-md border-gray-500 py-2 pl-3 hover:bg-gray-50">
			<Input
				id={`${todo.title}_task_checkbox`}
				type="checkbox"
				label={`Checkbox for ${todo.title}`}
				aria-label={`Checkbox for ${todo.title}`}
				name="status-toggle"
				checked={todo.completed}
				onChange={() => {
					handleEdit({
						type: "UPDATE",
						payload: { ...todo, completed: !todo.completed },
					});
				}}
				className="mt-2 scale-150 cursor-pointer rounded-lg accent-blue-600 focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-gray-500"
			/>

			<div className="flex flex-1 flex-col gap-1">
				<label
					htmlFor={`${todo.title}_task_checkbox`}
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
				className="mt-2 cursor-pointer rounded-lg p-1.5 duration-100 hover:bg-neutral-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Edit Todo"
				handler={() => handleShowModal("edit", todo)}
			>
				<Icon
					id="edit"
					className="h-6 w-6"
				></Icon>
			</Button>

			<Button
				className="mt-2 cursor-pointer rounded-lg p-1.5 duration-100 hover:bg-neutral-200 focus-visible:outline-1 focus-visible:outline-gray-500"
				label="Delete Todo"
				handler={() => handleShowModal("delete", todo)}
			>
				<Icon
					id="delete"
					className="h-6 w-6 stroke-1 text-red-500"
				></Icon>
			</Button>
		</li>
	);
});

export default ListItem;

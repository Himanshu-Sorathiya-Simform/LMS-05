import { type ActionDispatch, memo } from "react";
import type { TodosActionState } from "../reducer/todosReducer.ts";
import type { Todo } from "../types/types.ts";
import { formatDate } from "../utils/dateAndTime.ts";
import { Button } from "./ui/button.tsx";
import { Checkbox } from "./ui/checkbox.tsx";
import { Field, FieldContent, FieldDescription, FieldLabel } from "./ui/field.tsx";
import Icon from "./ui/Icon.tsx";

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
	function showEditModal() {
		handleShowModal("edit", todo);
	}

	function showDeleteModal() {
		handleShowModal("delete", todo);
	}

	return (
		<li className="group hover:bg-input relative flex items-start gap-3 rounded-md border-gray-500 py-2 pl-3">
			<span className="text-muted-foreground absolute top-1/2 -left-44 -translate-y-1/2 opacity-0 transition-all duration-100 group-hover:opacity-100">
				{formatDate(todo.createdAt)}
			</span>

			<Field
				orientation="horizontal"
				className="flex items-center *:[[role=checkbox]]:mt-1.5!"
			>
				<Checkbox
					id={`${todo.title}_task_checkbox`}
					name="status-toggle"
					checked={todo.completed}
					className="scale-110 cursor-pointer border-0 ring-1 focus-visible:ring-1 focus-visible:ring-gray-500 focus-visible:ring-offset-1 data-checked:bg-blue-600"
					onCheckedChange={() => {
						handleEdit({
							type: "UPDATE",
							payload: {
								...todo,
								completed: !todo.completed,
								completedAt: todo.completed ? -1 : Date.now(),
							},
						});
					}}
				/>

				<FieldContent>
					<FieldLabel
						htmlFor={`${todo.title}_task_checkbox`}
						className="max-w-132 truncate text-lg"
					>
						{todo.title}
					</FieldLabel>

					{todo.description && (
						<FieldDescription className="text-muted-foreground max-w-132 truncate font-light">
							{todo.description}
						</FieldDescription>
					)}
				</FieldContent>
			</Field>

			<Button
				className="hover:bg-chart-1 text-foreground mt-1 box-content cursor-pointer rounded-lg bg-transparent py-1 opacity-0 transition-all duration-100 group-hover:opacity-100 focus-visible:outline-1 focus-visible:outline-gray-500"
				aria-label="Edit Todo"
				onClick={showEditModal}
			>
				<Icon
					id="edit"
					className="size-5 text-gray-500"
				></Icon>
			</Button>

			<Button
				className="hover:bg-chart-1 mt-1 box-content cursor-pointer rounded-lg bg-transparent py-1 opacity-0 transition-all duration-100 group-hover:opacity-100 focus-visible:outline-1 focus-visible:outline-gray-500"
				aria-label="Delete Todo"
				onClick={showDeleteModal}
			>
				<Icon
					id="delete"
					className="size-5 stroke-1 text-red-500"
				></Icon>
			</Button>
		</li>
	);
});

export default ListItem;

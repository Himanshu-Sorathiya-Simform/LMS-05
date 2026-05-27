import { useId } from "react";

interface InputProps {
	type?: string;
	className?: string;
}

function Input({ type = "text", className = "" }: InputProps) {
	const id = useId();

	if (type === "checkbox")
		return (
			<input
				id={`${id}task-checkbox`}
				name={`${id}task-checkbox`}
				type={type}
				className={`cursor-pointer ${className}`}
			/>
		);

	return (
		<input
			id={`${id}task-name`}
			name={`${id}task-name`}
			type={type}
			className={`rounded-full bg-purple-50 px-5 py-3 text-xl text-purple-800 outline-1 outline-purple-400 transition duration-150 placeholder:text-purple-400 focus:outline-2 focus:outline-purple-700 focus:placeholder:text-purple-500 ${className}`}
			placeholder="Enter task name here..."
		/>
	);
}

export default Input;

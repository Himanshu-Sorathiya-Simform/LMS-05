interface InputProps {
	type?: string;
}

function Input({ type = "text" }: InputProps) {
	return (
		<input
			id="task-name"
			name="task-name"
			type={type}
			className="px-5 py-3 text-xl outline-1 outline-purple-400 focus:outline-purple-700 transition focus:outline-2 duration-150 rounded-full bg-purple-50 placeholder:text-purple-400 focus:placeholder:text-purple-500 text-purple-800"
			placeholder="Enter task name here..."
		/>
	);
}

export default Input;

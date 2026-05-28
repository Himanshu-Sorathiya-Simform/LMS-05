import { useId } from "react";

interface InputProps {
	name: string;
	label?: string;
	type?: string;
	placeholder?: string;
	className?: string;
}

function Input({
	name = "",
	label = "",
	type = "text",
	className = "",
	placeholder = "",
}: InputProps) {
	const id = useId();

	if (type === "checkbox")
		return (
			<input
				name={name}
				aria-label={label}
				type={type}
				className={`cursor-pointer ${className}`}
			/>
		);

	return (
		<div className="flex flex-col gap-1 text-lg">
			{label && <label htmlFor={id}>{label}</label>}

			<input
				id={id}
				name={name}
				type={type}
				className={`rounded-full px-5 py-3 text-xl transition ${className}`}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default Input;

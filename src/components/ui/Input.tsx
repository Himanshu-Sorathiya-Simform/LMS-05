import { useId } from "react";

interface InputProps {
	name: string;
	label?: string;
	type?: string;
	value?: string | number | boolean;
	placeholder?: string;
	className?: string;
}

function Input({
	type = "text",
	name = "",
	label = "",
	value = "",
	className = "",
	placeholder = "",
}: InputProps) {
	const id = useId();

	if (type === "checkbox")
		return (
			<input
				name={name}
				aria-label={label}
				defaultChecked={typeof value === "boolean" ? value : false}
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
				defaultValue={typeof value !== "boolean" ? value : ""}
				type={type}
				className={`rounded-full px-5 py-3 text-xl transition ${className}`}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default Input;

import { type InputHTMLAttributes, useId } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

function Input({ name = "", label = "", ...props }: InputProps) {
	const id = useId();

	if (props.type === "checkbox") {
		return (
			<input
				{...props}
				id={id}
				name={name}
			/>
		);
	}

	return (
		<div className="flex flex-col gap-1 text-lg">
			{label && <label htmlFor={id}>{label}</label>}

			<input
				{...props}
				id={id}
				name={name}
				className={`rounded-full px-5 py-3 text-xl transition ${props.className}`}
			/>
		</div>
	);
}

export default Input;

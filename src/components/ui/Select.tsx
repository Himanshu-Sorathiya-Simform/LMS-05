import { type SelectHTMLAttributes, useId } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	name: string;
	label?: string;
}

function Select({ name = "", label = "", ...props }: SelectProps) {
	const id = useId();

	return (
		<div className="flex flex-col gap-1 text-lg">
			{label && <label htmlFor={id}>{label}</label>}

			<select
				{...props}
				id={id}
				name={name}
				className={`rounded-full px-5 py-3 text-xl transition ${props.className}`}
			>
				<option value="">Select Status</option>
				<option value="true">Completed</option>
				<option value="false">Not Completed</option>
			</select>
		</div>
	);
}

export default Select;

import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	className?: string;
	children: React.ReactNode;
}

function Button({ label = "", className = "", children, ...props }: ButtonProps) {
	return (
		<button
			className={`flex cursor-pointer items-center justify-center transition ${className}`}
			aria-label={label}
			{...props}
			type={props.type ?? "button"}
		>
			{children}
		</button>
	);
}

export default Button;

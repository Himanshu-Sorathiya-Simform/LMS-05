import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string;
	handler?: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({
	label = "",
	handler = () => {},
	className = "",
	children,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			className={`flex cursor-pointer items-center justify-center transition ${className}`}
			onClick={handler}
			aria-label={label}
		>
			{children}
		</button>
	);
}

export default Button;

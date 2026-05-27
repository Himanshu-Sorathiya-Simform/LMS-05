interface ButtonProps {
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
}: ButtonProps) {
	return (
		<button
			className={`flex cursor-pointer items-center justify-center ${className}`}
			onClick={handler}
			aria-label={label}
		>
			{children}
		</button>
	);
}

export default Button;

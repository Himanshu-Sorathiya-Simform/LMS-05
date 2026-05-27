interface ButtonProps {
	handler?: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({ handler = () => {}, className = "", children }: ButtonProps) {
	return (
		<button
			className={`flex cursor-pointer items-center justify-center ${className}`}
			onClick={handler}
		>
			{children}
		</button>
	);
}

export default Button;

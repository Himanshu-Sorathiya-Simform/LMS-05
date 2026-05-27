interface ButtonProps {
	handler?: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({ handler = () => {}, className = "", children }: ButtonProps) {
	return (
		<button
			className={`cursor-pointer flex items-center justify-center ${className}`}
			onClick={handler}
		>
			{children}
		</button>
	);
}

export default Button;

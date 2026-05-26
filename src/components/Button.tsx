interface ButtonProps {
	handler: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({ handler, className = "", children }: ButtonProps) {
	return (
		<button
			className={`px-4 py-2 cursor-pointer rounded-full bg-blue-600 text-white flex items-center justify-center ${className}`}
			onClick={handler}
		>
			{children}
		</button>
	);
}

export default Button;

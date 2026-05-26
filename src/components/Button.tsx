interface ButtonProps {
	handler: () => void;
	className?: string;
	children: React.ReactNode;
}

function Button({ handler, className = "", children }: ButtonProps) {
	return (
		<button
			className={`px-4 py-2 cursor-pointer rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 focus:outline-1 focus:bg-blue-700 focus:outline-blue-700 transition duration-100 ${className}`}
			onClick={handler}
		>
			{children}
		</button>
	);
}

export default Button;

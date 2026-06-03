import { type ReactNode } from "react";

interface TooltipProps {
	className: string;

	onMouseEnter?: () => void;
	children: ReactNode;
}

function Tooltip({ className, onMouseEnter, children }: TooltipProps) {
	return (
		<div
			className={`absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 shadow-md ${className}`}
			onMouseEnter={onMouseEnter}
		>
			{children}
		</div>
	);
}

export default Tooltip;

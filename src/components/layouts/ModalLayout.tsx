import { forwardRef } from "react";
import { createPortal } from "react-dom";
import "./../../css/Modal.css";
interface ModalProps {
	onClose: () => void;
	children: React.ReactNode;
	className?: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(
	({ onClose, children, className = "" }, ref) => {
		const handleCancel = (event: React.SyntheticEvent<HTMLDialogElement>) => {
			event.preventDefault();
			onClose();
		};

		return createPortal(
			<dialog
				ref={ref}
				onCancel={handleCancel}
				className={`universal-modal ${className}`}
			>
				<div className="modal-container">{children}</div>
			</dialog>,
			document.body,
		);
	},
);

Modal.displayName = "Modal";

export default Modal;

import { type RefObject, useCallback, useRef, useState } from "react";
import type { Todo } from "../types/types.ts";

function useModal() {
	const [modalState, setModalState] = useState<{
		type: string;
		data: Todo | undefined;
	}>({ type: "", data: undefined });

	const ref: RefObject<HTMLDialogElement | null> = useRef(null);

	const handleShowModal = useCallback((type: string, data?: Todo) => {
		if (!ref.current) return;

		setModalState({ type, data });
		ref.current.showModal();
	}, []);

	const handleCloseModal = useCallback(() => {
		if (!ref.current) return;

		setModalState({ type: "", data: undefined });
		ref.current.close();
	}, []);

	return { ref, modalState, handleShowModal, handleCloseModal };
}

export { useModal };

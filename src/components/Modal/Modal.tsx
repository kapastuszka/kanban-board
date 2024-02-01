import { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
	children: ReactNode;
}

export function Modal({ children }: ModalProps) {
	const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	if (!modalRef.current) {
		modalRef.current = document.createElement("div");
	}

	useEffect(() => {
		const modalRoot = document.getElementById("modal");

		if (!modalRef.current || !modalRoot) return;

		modalRoot.appendChild(modalRef.current);

		return () => {
			if (modalRef.current) modalRoot.removeChild(modalRef.current);
		};
	}, []);

	return createPortal(
		<div className={css.modal}>
			<div className={css.wrapper}>{children}</div>
		</div>,
		modalRef.current,
	);
}

export function ModalBody({
	children,
	title,
}: { children?: ReactNode; title?: ReactNode }) {
	return (
		<div className={css.body}>
			<h1 className={css.title}>{title}</h1>
			{children}
		</div>
	);
}
export function ModalFooter({ children }: { children: ReactNode }) {
	return <div className={css.footer}>{children}</div>;
}

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;

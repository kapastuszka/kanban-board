import { ReactNode } from "react";
import css from "./Column.module.css";

export default function Column({
	title,
	children,
}: { title: string; children?: ReactNode }) {
	return (
		<div className={css.column}>
			<h2>{title}</h2>
			{children}
		</div>
	);
}

import { Task } from "..";
import { useStore } from "../../store";
import { TaskStatus } from "../../types/global";
import css from "./Column.module.css";

export default function Column({
	title,
	status,
}: { title: string; status: TaskStatus }) {
	const tasks = useStore((store) =>
		store.tasks.filter((task) => task.status === status),
	);
	return (
		<div className={css.column}>
			<div className={css.titleWrapper}>
				<h2>{title}</h2>
			</div>
			{tasks.map(({ id, title, status, description }) => (
				<Task
					id={id}
					key={id}
					title={title}
					description={description}
					status={status}
				/>
			))}
		</div>
	);
}

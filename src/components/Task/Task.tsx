import cn from "classnames";
import css from "./Task.module.css";
type Status = "PLANNED" | "DONE" | "ONGOING";
function Task({
	title,
	description,
	status,
}: { title: string; description: string; status: Status }) {
	return (
		<div className={css.task}>
			<h3>{title}</h3>
			<p>{description}</p>
			<small
				className={cn(css.status, {
					[css.done]: status === "DONE",
					[css.planned]: status === "PLANNED",
					[css.ongoing]: status === "ONGOING",
				})}
			>
				{status}
			</small>
		</div>
	);
}

export default Task;

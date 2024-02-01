import cn from "classnames";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Task as TaskType } from "../../types/global";
import css from "./Task.module.css";
function Task({ title, description, status }: TaskType) {
	return (
		<div className={css.task}>
			<div className={css.header}>
				<h3>{title}</h3>
				<div className={css.actions}>
					<button type="button">
						<FiEdit />
					</button>
					<button type="button">
						<FiTrash2 />
					</button>
				</div>
			</div>
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

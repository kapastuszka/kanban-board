export type TaskStatus = "PLANNED" | "DONE" | "ONGOING";

export interface Task {
	title: string;
	status: TaskStatus;
	description?: string;
	id: string;
}

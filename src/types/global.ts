export type TaskStatus = "PLANNED" | "DONE" | "ONGOING";

export interface Column {
	title: string;
	status: TaskStatus;
}

export interface Task {
	title: string;
	status: TaskStatus;
	description?: string;
	id: string;
}

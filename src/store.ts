import { create } from "zustand";
import { Task } from "./types/global";

interface Store {
	tasks: Task[];
	addTask: ({ title, status }: Task) => void;
}

export const useStore = create<Store>()((set) => ({
	tasks: [
		{
			title: "Task #1",
			id: "1",
			description: "My short description",
			status: "PLANNED",
		},
		{
			title: "Task #2",
			id: "2",
			description:
				"Pepper jack roquefort babybel goat everyone loves smelly cheese paneer melted cheese. Jarlsberg rubber cheese parmesan cheese and biscuits cheese and wine airedale pecorino cheesy grin. Caerphilly babybel manchego airedale bocconcini",
			status: "ONGOING",
		},
		{
			title: "Task #3",
			id: "3",
			status: "DONE",
		},
	],
	addTask: ({ title, status, description, id }) =>
		set((state) => ({
			tasks: [...state.tasks, { title, status, description, id }],
		})),
}));

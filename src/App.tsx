import { FormEvent, useState } from "react";
import css from "./App.module.css";
import { Button, Column, Modal } from "./components";
import { columns } from "./const";
import { useStore } from "./store";
import { TaskStatus } from "./types/global";

function App() {
	const [showModal, setShowModal] = useState(false);
	const addTask = useStore((store) => store.addTask);
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const values = {
			title: formData.get("title")?.toString() ?? "",
			description: formData.get("description")?.toString() ?? "",
			status: formData.get("status")?.toString() ?? "PLANNED",
		};

		addTask({
			...values,
			status: values.status as TaskStatus,
			id: self.crypto.randomUUID().toString(),
		});

		setShowModal(false);
	};

	return (
		<div className={css.app}>
			<section className={css.layout}>
				<header className={css.header}>
					<h1>My project</h1>
					<Button text="Add task" onClick={() => setShowModal(true)} />
				</header>
				{columns.map(({ title, status }) => (
					<Column key={status} title={title} status={status} />
				))}
			</section>
			{showModal ? (
				<Modal>
					<Modal.Body title="Add task">
						<form id="task-form" onSubmit={handleSubmit}>
							<label htmlFor="title">Title</label>
							<input type="text" id="title" name="title" />
							<label htmlFor="description">Description</label>
							<textarea id="description" name="description" />
							<label htmlFor="status">Status</label>
							<select id="status" name="status">
								{columns.map(({ title, status }) => (
									<option key={status} value={status}>
										{title}
									</option>
								))}
							</select>
						</form>
						<Modal.Footer>
							<Button text="Cancel" onClick={() => setShowModal(false)} />
							<Button type="submit" form="task-form" text="OK" />
						</Modal.Footer>
					</Modal.Body>
				</Modal>
			) : null}
		</div>
	);
}

export default App;

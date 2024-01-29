import css from "./App.module.css";
import { Column } from "./components";
import { Task } from "./components/Task";

function App() {
	return (
		<div className={css.app}>
			<section>
				<Column title="To do">
					<Task title="Task #1" description="Example" status="PLANNED" />
				</Column>
				<Column title="In progress">
					<Task title="Task #2" description="Example" status="ONGOING" />
				</Column>
				<Column title="Done">
					<Task title="Task #3" description="Example" status="DONE" />
				</Column>
			</section>
		</div>
	);
}

export default App;

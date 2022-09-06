import { Link } from "react-router-dom";
import { useTasksQuery } from "../graphql/generated";

const Tasks = () => {
  const { data: { tasks = [] } = {} } = useTasksQuery();

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/tasks/${task.id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;

type Prop = {
    id: number,
    title: string,
    body: string,
    state: number,
    created_at: string,
}
type Task = {
  tasks :Prop[]
}

const TaskList:React.FC<Task>  = ({ tasks }) => {
  const renderTasks = (taskArray: Prop[]) => {
    taskArray.sort((a: Prop, b: Prop) => {
      const aTaskDate = new Date(a.created_at)
      const bTaskDate = new Date(b.created_at)
      return aTaskDate < bTaskDate ? 1 : -1;
    });
    return taskArray.map((task) => (
      <li key={task.id}>
        {task.title}
        {' - '}
        {task.body}
      </li>
    ));
  };

  return (
    <section>
      <h2>Tasks</h2>
      <ul>{renderTasks(tasks)}</ul>
    </section>
  );
};

export default TaskList;

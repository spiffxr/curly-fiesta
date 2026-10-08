import Task from "./Task.jsx";

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <Task 
        {...task} 
        key={task.id} 
        toggleTask={props.toggleTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;

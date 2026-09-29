import { useState } from "react";

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="new-task">New task</label>
        <br />
        <input
          id="new-task"
          type="text"
          value={newTask}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Add task</button>
      </p>
    </form>
  );
};

export default TaskForm;

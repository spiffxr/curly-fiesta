import { useState } from "react";
import { nanoid } from "nanoid";

import TaskForm from "./TaskForm.jsx";
import TaskList from "./TaskList.jsx";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "task-ROdjxDssGOwHqk9k5geeN",
      name: "Walk the dogs",
      isComplete: false,
    },
    {
      id: "task-s5LkqCWw8CVT-IPo1ob1r",
      name: "Buy groceries",
      isComplete: false,
    },
    {
      id: "task-DdKrteCn3rwZ4Z9dN_NWz",
      name: "Work out",
      isComplete: false,
    },
  ]);

  const addTask = (taskName) => {
    const newTask = {
      id: `task-${nanoid()}`,
      name: taskName,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <h1>Tasks</h1>
      <TaskForm addTask={addTask} />
      {tasks.length > 0 ? <TaskList tasks={tasks} /> : <p>Add some tasks...</p>}
    </>
  );
};

export default App;

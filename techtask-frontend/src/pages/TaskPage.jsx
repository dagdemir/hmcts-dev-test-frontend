import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { getTasks } from "../api/taskApi";

function TaskPage() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await getTasks();
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={fetchTasks} />
      <TaskList
        tasks={tasks}
        onTaskSelect={(task) => console.log("Selected:", task)}
        onDelete={fetchTasks}
      />
    </div>
  );
}

export default TaskPage;

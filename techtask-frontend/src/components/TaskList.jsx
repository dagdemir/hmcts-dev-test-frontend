import React from "react";
import { deleteTask, updateTaskStatus } from "../api/taskApi";

function TaskList({ tasks, onTaskSelect, onDelete }) {
  const handleDelete = async (id) => {
    await deleteTask(id);
    onDelete(); // update the task list
  };

  const handleUpdateStatus = async (id) => {
    await updateTaskStatus(id, "IN_PROGRESS"); // new status
    onDelete(); // update the task list
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.status})
            <button onClick={() => handleUpdateStatus(task.id)}>
              Update Status
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

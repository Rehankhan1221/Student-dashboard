import style from "./Task.module.css";
import { useState } from "react";
const NewTaskAdd = ({ onTaskChange }) => {
  let [task, setTask] = useState("");
  let [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleComplete = (index) => {
    const updatedTasks = tasks.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item,
    );

    setTasks(updatedTasks);
    onTaskChange(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index);

    setTasks(updatedTasks);
    onTaskChange(updatedTasks);
  };

  const handleEdit = (index) => {
    const updatedTask = prompt("Edit your task:", tasks[index].name);

    if (updatedTask === null || updatedTask.trim() === "") {
      return;
    }

    const updatedTasks = tasks.map((item, i) =>
      i === index ? { ...item, name: updatedTask.trim() } : item,
    );

    setTasks(updatedTasks);
    onTaskChange(updatedTasks);
  };

  const filteredTasks = tasks.filter((item) => {
    if (filter === "pending") {
      return !item.completed;
    }

    if (filter === "completed") {
      return item.completed;
    }

    return true;
  });

  const handleTask = () => {
    if (task.trim() === "") {
      return;
    }

    const updatedTasks = [
      ...tasks,
      {
        name: task,
        completed: false,
      },
    ];

    setTasks(updatedTasks);
    onTaskChange(updatedTasks);
    setTask("");
  };
  return (
    <div>
      <div className={style.inputSection}>
        <input
          type="text"
          name=""
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleTask();
            }
          }}
          className={style.searchBox}
          placeholder="  Add new task..."
        />
        <button onClick={handleTask} className={style.btn}>
          <img src="" alt="" />
          Add Task
        </button>
      </div>

      <div className={style.filterButtons}>
        <button onClick={() => setFilter("all")}>All</button>

        <button onClick={() => setFilter("pending")}>Pending</button>

        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <div className={style.taskList}>
        {filteredTasks.map((item) => {
          const index = tasks.indexOf(item);

          return (
            <div className={style.taskItem} key={index}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleComplete(index)}
                id=""
              />
              <span
                style={{
                  textDecoration: item.completed ? "line-through" : "none",
                }}
              >
                {item.name}
              </span>
              <button
                className={style.editBtn}
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className={style.deleteBtn}
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewTaskAdd;

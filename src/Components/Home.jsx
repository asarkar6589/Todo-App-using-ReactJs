import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  // Array for storing the tasks
  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();

    if (title === "" || description === "") {
      alert("Please Enter the Title of your task or description");
    } else {
      setTask([
        ...task,
        {
          title: title,
          description: description,
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <div className="home">
      <h1>Todo App</h1>

      <div className="container">
        <h2>Getting Things Done</h2>

        <form onSubmit={submitHandeler}>
          <input
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="taskList">
        {task.map((item, index) => {
          return (
            <Task
              key={index}
              title={item.title}
              description={item.description}
              index={index}
              array={task}
              method={setTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

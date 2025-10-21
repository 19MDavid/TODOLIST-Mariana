import React, { useState, useEffect } from "react";

const ToDoList = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setTasks([...tasks, task.trim()]);
            setTask("");
        }
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-container">
            <h1>todos</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        placeholder="Agrega una Tarea"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </li>

                {tasks.length === 0 ? (
                    <li className="empty">No hay tareas, añadir tareas</li>
                ) : (
                    tasks.map((t, index) => (
                        <li key={index}>
                            {t}
                            <span className="delete" onClick={() => handleDelete(index)}>
                                ❌
                            </span>
                        </li>
                    ))
                )}
            </ul>

            <div className="counter">
                {tasks.length} {tasks.length === 1 ? "item left" : "items left"}
            </div>
        </div>
    );
};

export default ToDoList;

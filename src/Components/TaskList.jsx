import React from 'react'

export default function TaskList({ tasks, updateTask, deleteTask }) {
    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        updateTask(updatedTask, index);
    };
    return (
        <ul className='lists'>
            {
                tasks.map((task, index) => {
                    return (
                        <li key={index} className={task.completed ? "completed" : ""}>
                            <div style={{ backgroundColor: "transparent" }}>
                                <b style={{ backgroundColor: "transparent", textDecoration: task.completed ? "line-through" : "none" }}>{index + 1}. {task.text}</b>
                                <p style={{ backgroundColor: "transparent" }}><small style={{ backgroundColor: "transparent" }}>({task.priority},{task.category})</small></p>
                            </div>

                            <div className='btnflex' style={{ backgroundColor: "transparent" }}>
                                <button onClick={() => { toggleComplete(index) }}>{task.completed ? "Undo" : "Complete"}</button>
                                <button onClick={() => { deleteTask(index) }}>Delete</button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}
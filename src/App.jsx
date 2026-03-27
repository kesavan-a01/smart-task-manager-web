import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import ProgressTracker from './Components/ProgressTracker'
import TaskForm from './Components/TaskForm'
import TaskList from './Components/TaskList'
// 
export default function App() {
    const [tasks, setTasks] = useState([]);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScrolled = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScrolled);

        return () => { window.removeEventListener("scroll", handleScrolled) };
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask, index) => {
        const newTasks = [...tasks];
        newTasks[index] = updatedTask;
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((value, i, array) => {
            if (i !== index) {
                return true;
            }
            else {
                return false;
            }
        }))
    };
    const resetTasks = () => {
        setTasks([]);
    };
    return (
        <div >
            <div className="alignment">
                <header className={`Head${scrolled ? " Scrolled" : ""}`}>
                    <h1 className="title">Smart Task Manager</h1>
                    <p>Simplify your day</p>
                </header>
            </div>
            <h3 className='Enterhead'>Enter Task</h3>
            <TaskForm addTask={addTask} />
            <hr></hr>
            <h3 className='Taskhead'>Your Tasks</h3>
            <ProgressTracker tasks={tasks} />
            <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />

            <center>{tasks.length > 0 && (<button className="clear-btn" onClick={() => { resetTasks() }}>Clear all</button>)}</center>
        </div>
    )
}
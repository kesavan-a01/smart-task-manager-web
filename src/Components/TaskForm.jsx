import React from 'react';
import { useState } from 'react';
export default function TaskForm({ addTask }) {

    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium");
    const [category, setCategory] = useState("General");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ text: task, priority: priority, category: category, completed: false });

        // For Resetting the input form after submit
        setTask("");
        setPriority("Medium");
        setCategory("General");
    };

    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>

            <div>
                <input value={task} type="text" placeholder='Enter Your Task' onChange={(e) => { setTask(e.target.value) }} required />

                <select value={priority} onChange={(e) => { setPriority(e.target.value) }}>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="General">General</option>
                </select>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}
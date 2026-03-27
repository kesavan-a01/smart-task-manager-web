import React from 'react'

export default function ProgressTracker({ tasks }) {
    const completedTasks = tasks.filter((value, index, array) => {
        if (value.completed) {
            return true;
        }
        else {
            return false;
        }
    }).length;

    const totalTasks = tasks.length;
    const percentage = totalTasks == 0 ? 0 : (completedTasks / totalTasks) * 100;
    return (
        <div className='Main-tracker'>
            <div className='tracker-bg'>
                <div className='actual-tracker' style={{ width: `${percentage}%` }}>

                </div>
            </div>
            <p className='tracker'>{completedTasks} out of {totalTasks} tasks completed</p>
        </div>
    )
}
import React, { useState } from 'react'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      <h6 style={{ marginLeft: '15px', color: 'orange' }}>
        Double click on the task to Activate/Deactiave reminder
      </h6>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Tasks

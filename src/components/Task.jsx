import React from "react"
import { FaTrash } from "react-icons/fa";
import { TaskUpdate } from "./TaskUpdate"

export const Task = ({
    task,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask
}) =>{
    return(
        <li>
            <span
                onClick={() => handleCompleteTask(task.id)}    
            >
                <label
                className={`container-done ${task.done ? "active" : ""}`}>
                </label>
            </span>
            
            <TaskUpdate task={task} handleUpdateTask={handleUpdateTask}/>

            <button className="btn-delete" onClick={() => handleDeleteTask(task.id)}><FaTrash /></button>
        </li>
    )
}
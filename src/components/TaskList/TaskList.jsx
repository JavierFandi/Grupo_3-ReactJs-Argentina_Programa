import React from "react"
import { Task } from "../Task/Task"

export const TaskList = ({
    tasks,
    handleUpdateTask,
    handleDeleteTask,
    handleCompleteTask
}) => {
    return(
        <ul>
            {tasks.map(task =>(
                <Task
                    key={task.id}
                    task={task}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                />
            ))}
        </ul>
        
    )
}
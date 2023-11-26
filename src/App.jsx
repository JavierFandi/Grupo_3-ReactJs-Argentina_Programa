import React from 'react'
import { TaskAdd, TaskList } from './components'
import { UseTasks } from './components/hooks/UseTask'
import './App.css'




function App() { 
    const {
        tasks,
        tasksCount,
        taskPendingCount,

        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    } = UseTasks()

    return(
        <>
            <div>
                <video src="src\assets\galaxy_space.mov" autoplay="true" muted="true" loop="true" ></video>
            </div>

            <div className="card-task">
                <h1 className='title'>Lista de Tareas</h1>

                <div className="counter-task">
                    <h3>N° Tareas: <span>{tasksCount}</span></h3>
                    <h3>Pendientes: <span>{taskPendingCount}</span></h3>
                </div>

                <div className="add-task">
                    <h3>Agregar Tarea</h3>
                    <TaskAdd handleNewTask={handleNewTask}/>
                </div>

                <TaskList 
                    tasks={tasks}
                    handleUpdateTask={handleUpdateTask}
                    handleDeleteTask={handleDeleteTask}
                    handleCompleteTask={handleCompleteTask}
                />
            </div>
        </>
    )
}

export default App
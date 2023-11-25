import { useEffect, useReducer } from "react"
import { TaskReducer } from "../../TaskReducer"

export const UseTasks = () => {

    const initialState = [ ];

    const init = () => {
        return JSON.parse(localStorage.getItem('tasks')) || [ ]
    }

    const [tasks, dispatch] = useReducer(TaskReducer, initialState, init)

    const tasksCount = tasks.length

    const taskPendingCount = tasks.filter(task => !task.done).length

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const handleNewTask = task => {
        const action = {
            type: "AddTask",
            payload: task,
        }

        dispatch(action)
    }

    const handleDeleteTask = id => {
        const action = {
            type: "DeleteTask",
            payload: id,
        }
        dispatch(action)
    }

    const handleCompleteTask = id => {
        const action = {
            type: "CompleteTask",
            payload: id,
        }
        dispatch(action)
    }

    const handleUpdateTask = (id, description) => {
        const action = {
            type: "UpdateTask",
            payload: { id, description }
        }
        dispatch(action)
    }

    return{
        tasks,
        tasksCount,
        taskPendingCount,

        handleNewTask,
        handleDeleteTask,
        handleCompleteTask,
        handleUpdateTask
    }
}
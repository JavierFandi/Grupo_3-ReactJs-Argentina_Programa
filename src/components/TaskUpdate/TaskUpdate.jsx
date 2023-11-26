import React, { useRef, useState } from "react"
import { FaEdit } from "react-icons/fa";
import { UseForm } from "../hooks/UseForm";


export const TaskUpdate = ({task, handleUpdateTask}) => {

    const {updateDescription, onInputChange} = UseForm({
        updateDescription: task.description
    })

    const [disabled, setdisabled] = useState(true)

    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = task.id
        const description = updateDescription

        handleUpdateTask(id, description)

        setdisabled(!disabled)

        focusInputRef.current.focus()
    }

    return(
        <form onSubmit={onSubmitUpdate}>
            <input
                type="text"
                className={`input-update ${
                    task.done ? 'text-decoration-dashed' : ''
                }`}
                name="updateDescription"
                value={updateDescription}
                onChange={onInputChange}
                placeholder="¿Que hay que hacer?"
                readOnly={disabled} 
                ref={focusInputRef}
            />

            <button className="btn-edit" type="submit"><FaEdit /></button>
        </form>
    )
}
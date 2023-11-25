import React from "react"
import { UseForm } from "./hooks/UseForm"

export const TaskAdd = ({handleNewTask}) => {

    const { description, onInputChange, onResetForm} = UseForm({
        description: '',
    })

    const onFormSubmit = e => {
        e.preventDefault()

        if(description.length <= 1) return

        let newTask = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewTask(newTask)
        onResetForm();

    }

    return(
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                className="input-add"
                name="description"
                value={description}
                onChange={onInputChange}
                placeholder="¿Que hay que hacer?"

            />

            <button className="btn-add" type="submit">Agregar</button>
        </form>
    )
}
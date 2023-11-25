export const TaskReducer = (initialState, action) => {

    switch(action.type){
        case "AddTask":
            return [...initialState, action.payload]
        case "DeleteTask":
            return initialState.filter(task => task.id !== action.payload)
        case "CompleteTask":
            return initialState.map(task => {
                if (task.id === action.payload) {
                    return{
                        ...task,
                        done: !task.done
                    }
                }
                return task
            })
        case "UpdateTask":
            return initialState.map(task => {
                if (task.id === action.payload.id) {
                    return{
                        ...task,
                        description: action.payload.description
                    }
                }
                return task
            })
        default:
            return initialState
        
    }

}
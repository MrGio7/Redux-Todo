export const ADD = 'ADD';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const add = (newTask) => {
    return{
        type: ADD,
        payload: {
            task: newTask,
            id: Date.now(),
            completed: false
        }
    }
}

export const toggleTask = index => {
    return{
        type: TOGGLE_TASK,
        payload: index
    }
}

export const clearCompleted = (id) => {
    console.log(id)
    return{
        type: CLEAR_COMPLETED,
    }
}
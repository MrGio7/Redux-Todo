export const ADD = 'ADD';
export const TOGGLE_TASK = 'TOGGLE_TASK';

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
    console.log(index)
    return{
        type: TOGGLE_TASK,
        payload: index
    }
}
export const ADD = 'ADD';

export const add = (newTask) => {
    console.log(newTask)
    return{
        type: ADD,
        payload: {
            task: newTask,
            id: Date.now()
        }
    }
}
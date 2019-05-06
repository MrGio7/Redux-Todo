import { ADD } from '../actions';
import { TOGGLE_TASK } from '../actions';
import { CLEAR_COMPLETED } from '../actions';

const initialState = {
    todo: [
        {
          task: 'Organize Garage',
          completed: false
        },
        {
          task: 'Bake Cookies',
          completed: false
        }
      ]
}


export default (state=initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todo: [
                    ...state.todo,
                    action.payload
                ]
            }

        case TOGGLE_TASK:
            return {
                ...state,
                todo: state.todo.map((todo, index) => {
                    if(index === action.payload) {
                      return{
                        ...todo,
                        completed: !todo.completed
                      };
                    }
                    return todo;
                  })
            }

        case CLEAR_COMPLETED:
            return{
                ...state,
                todo: state.todo.filter(task => !task.completed)
            }

        default:
            return state;
    }
}
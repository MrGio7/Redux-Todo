import { ADD } from '../actions'

const initialState = {
    todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358
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

        default:
            return state;
    }
}
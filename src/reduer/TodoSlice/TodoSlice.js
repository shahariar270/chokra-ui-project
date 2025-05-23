
export const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Date.now(),
            value,
        }
    }
}

const initialState = {
    todo: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        default:
            return state
    }
}
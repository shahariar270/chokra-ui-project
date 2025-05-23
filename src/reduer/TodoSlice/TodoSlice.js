
export const addTodo = (value) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Date.now(),
            value,
        }
    }
}
export const removeTodo = (itemId) => {
    return {
        type: 'REMOVE_TODO',
        payload: itemId
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
        case 'REMOVE_TODO':
            return {
                ...state,
                todo: state.todo.filter(item=> item.id !== action.payload)
            }
        default:
            return state
    }
}
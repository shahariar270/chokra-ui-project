
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
export const editMode = (itemId) => {
    return {
        type: 'EDIT_MODE',
        payload: itemId
    }
}

const initialState = {
    todo: [],
    isEdit:null 
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
        case 'EDIT_MODE':
            return {
                ...state,
                isEdit:action.payload  
            }
        default:
            return state
    }
}
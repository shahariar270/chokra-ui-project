
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
export const updateTodo = (id, value) => {
    return {
        type: 'UPDATE_TODO',
        payload: { id, value }
    }
}

const todoStore = JSON.parse(localStorage.getItem('todoData')) || [];


const initialState = {
    todo: Array.isArray(todoStore) ? todoStore : Object.values(todoStore).flat(),
    // isEdit: null
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const addTodo = {
                ...state,
                todo: [...state.todo, action.payload]
            }
            localStorage.setItem('todoData', JSON.stringify(addTodo));
            return addTodo;

        case 'REMOVE_TODO':
            const removeTodo = {
                ...state,
                todo: state.todo.filter(item => item.id !== action.payload)
            }
            localStorage.setItem('todoData', JSON.stringify(removeTodo));
            return removeTodo;
        case 'EDIT_MODE':
            return {
                ...state,
                isEdit: action.payload
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todo: state.todo.map((item) => {
                    item.id == action.payload.id ?
                        { ...item, value: action.payload.value } : item
                })
            }
        default:
            return state
    }
}
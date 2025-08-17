

export const addData = (id, value) => {
    return {
        type: 'add_data',
        payload: {
            id,
            value
        }
    }
}
export const editData = (id, value) => {
    return {
        type: 'edit_data',
        payload: {
            id,
            value
        }
    }
}

export const deleteData = (id) => {
    return {
        type: 'remove_data',
        payload: id
    }
}


const initialState = {
    crud: []
};

export const CrudReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_data':
            return {
                ...state,
                crud: [...state.crud, action.payload]
            };
        case 'edit_data':
            return {
                ...state,
                crud: state.crud.map(item =>
                    item.id === action.payload.id ? {
                        ...item,
                        value: action.payload.value
                    } :
                        item
                )
            };
        case 'remove_data':
            return {
                ...state,
                crud: state.crud.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
}


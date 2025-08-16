

export const addData = (id, value) => {
    return {
        type: 'add_data',
        payload: {
            id,
            value
        }
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
        default:
            return state;
    }
}



// function crudReducer(state = initialState, action) {
    
// }


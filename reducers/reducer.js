const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action) {
        case 'ADD_TODO':
            // I will do return state first
            return state 
        default:
            return state;
    }
}

export default reducer;
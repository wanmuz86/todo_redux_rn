const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            
            const newItem = { id: 1, name: action.text };
          
            const newArray = [...state.todos, newItem];
   
            return {...state,todos:newArray}
        default:
            return state;
    }
}

export default reducer;
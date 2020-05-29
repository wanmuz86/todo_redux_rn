const initialState = {
    todos: []
}
let number = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':

            const newItem = { id: number++, name: action.text, completed: false };

            //; get the current array, but add newItem at the end - es6 fcc or redux fcc (you will do it during next week break)
            // In redux use this instead of push
            const newArray = [...state.todos, newItem];
            // get the current object, but change the todos value to new Array 
            // In redux, use this instead of . [""] = state["todos"] = newArray
            return { ...state, todos: newArray }
        case 'DELETE_TODO':

            const deletedItem = [...state.todos.slice(0, action.id), ...state.todos.slice(action.id + 1)]
            return { ...state, todos: deletedItem };

        case 'MARK_AS_DONE':

        // Refer to array map inside functional programming, es6  [... ], {... }
            const arrayItem = [...state.todos.map(val => {
                if (val.id == action.id) {
                    return { ...val, completed: true }
                }
                return val
            })]
            return {...state, todos: arrayItem};
        default:
            return state;
    }
}

export default reducer;

// To add 2 buttons in every row
// 1 button will have delete function 
// Another button will have mark as done

// Make sure that all the button works
// For delete it will remove from the list
//For mark as done you can  show done or tick if it is done
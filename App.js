import React from 'react';
import {Provider} from 'react-redux'
import store from './stores/store'

import Todo from './components/Todo'
export default function App() {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider>
  
  );
}


// Remaining things to do :


// mapStateToProps
// mapDispatchToProps
// New thing - passing data from component to reducer
// Linking
//Bring out item from reducers

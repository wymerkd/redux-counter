import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

const myStore = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// // let store  = createStore(reducer)
//
// //STORE (GLOBALIZED STATE)
//
// //ACTION INCREMENT (DESCRIBES WHAT YOU WANT TO DO) (I'm hungry...) A function that returns and object
//
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// };
//
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// };
//
// //REDUCER (HOW YOUR ACTIONS TRANSFORM THE STATE INTO ITS NEXT STATE) (MODIFIES THE STORE) This is going to look at the name or type and go do the bottom stuff accordingly
//
// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };
//
// // Display it in the console
// let store = createStore(counter);
// store.subscribe(() => console.log(store.getState()));
//
// //DISPATCH (EXECUTES THE ACTION TO THE REDUCER SO WE CAN USE IT'S NEW STATE)
//
// // DISPATCH CALLS THE ACTION AND THE REDUCER CHECKS WHAT TO DO AND UPDATES THE STORE...
//
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

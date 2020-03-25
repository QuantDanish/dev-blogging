import { combineReducers, createStore, compose } from 'redux';


// const a = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const tool = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancer = tool || compose;

// export default function configureStore (initialState: any) {
//   const rootReducer = combineReducers(reducers);
//   return createStore(rootReducer, initialState, composeEnhancer());
// }


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; //file is called index.js so no need to include the filename

const initialState = {};

const middleware = [thunk]; //put middleware we are going to use in an array

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // we pass applyMiddleware inside compose function and then use spread operator on middleware array
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

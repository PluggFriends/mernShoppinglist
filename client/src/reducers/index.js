import { combineReducers } from 'redux';
import itemReducer from './itemReducer'; //import any reducer that is going to be used

//this reducer brings together all of the reducers

export default combineReducers({
  item: itemReducer,
  //auth: authReducer etc etc,
});

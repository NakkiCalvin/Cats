import { combineReducers } from 'redux';
// import freezeReducer from './freeze';
import catReducer from './cat/catReducer';
import personReducer from './person/personReducer';
import auth from './auth';

export default combineReducers({
  catReducer,
  personReducer,
  auth,
});

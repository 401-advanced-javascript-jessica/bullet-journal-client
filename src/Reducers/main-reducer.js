import { combineReducers } from 'redux';
import tasks from './task-reducer';
import users from './auth-reducer';

export default combineReducers({
  tasks,
  users,
});

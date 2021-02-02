import emailReducer from './Emails';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    emails: emailReducer,
    isLogged: loggedReducer
});

export default allReducers;
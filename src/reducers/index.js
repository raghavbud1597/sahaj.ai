import emailReducer from './Emails';
import loggedReducer from './isLogged';
import categoryReducer from './Categories';
import { combineReducers } from 'redux';
import labelReducer from './Labels';

const allReducers = combineReducers({
    emails: emailReducer,
    isLogged: loggedReducer,
    labels: labelReducer,
    categories: categoryReducer
});

export default allReducers;
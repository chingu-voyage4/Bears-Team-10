import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import loadPicOfDay from './reducer-POD';

const allReducers = combineReducers({
    // users is used to access UserReducer data all throughout the app
    users: UserReducer,
    activeUser: ActiveUserReducer,
    loadPOD: loadPicOfDay
});

export default allReducers;

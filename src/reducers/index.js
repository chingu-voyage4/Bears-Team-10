import {combineReducers} from 'redux';
import UserReducer from './reducer-users';


const allReducers = combineReducers({
    // users is used to access UserReducer data all throughout the app
    users: UserReducer
});

export default allReducers;

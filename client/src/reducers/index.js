// Combine Reducers in this file and export them
import { combineReducers } from 'redux'
import authReducer from './auth-reducer';
import podReducer from './pod-reducer';
import spacexReducer from './spacex-reducer';
import epicReducer from './epic-reducer';
import ISSReducer from './ISS-reducer';
import redditReducer from './reddit-reducer';

export default combineReducers({
  auth: authReducer,
  podReducer,
  spacexReducer,
  epicReducer,
  ISSReducer,
  redditReducer
})

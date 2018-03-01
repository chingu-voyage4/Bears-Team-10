// Combine Reducers in this file and export them
import { combineReducers } from 'redux'
import pod from './pod-reducer';
import spacex from './spacex-reducer';

export default combineReducers({
  pod,
  spacex
})

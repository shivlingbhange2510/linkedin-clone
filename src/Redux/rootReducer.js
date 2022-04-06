import { authReducer } from './Auth0/authReducer'
import { combineReducers } from 'redux'
// import { todoReducer } from '.Todo/todoReducer';
import { todoReducer } from './Todo/todoReducer'
import {allPostReducer} from './AllPost/allPostReducer'

export const rootReducer=combineReducers({Auth:authReducer,todo:todoReducer, allPost:allPostReducer})

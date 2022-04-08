import { createStore } from 'redux';
// import { authReducer } from './Auth0/authReducer';
import { rootReducer } from './rootReducer'
// const initialState={
//     Auth:[{name:"shiv", id:1}],
//     todo:authReducer
// }
export const store=createStore(rootReducer, 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
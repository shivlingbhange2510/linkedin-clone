import { ADD_TODO } from './todoActionType'
const initialState={
    todo:[{id:1, title:'hi first'}]
}
export const todoReducer =(store=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:
            return{ ...store,todo:[...store.todo, action.payload]}
        default:
        return(store)
    }
}
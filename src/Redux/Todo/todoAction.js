import { ADD_TODO} from './todoActionType';

export const addTodo=(payload)=>({
    type:ADD_TODO,
    payload:payload
})
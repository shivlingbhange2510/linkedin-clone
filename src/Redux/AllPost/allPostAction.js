import { GET_ALL_POST,UPDATE_GET_ALL_POST} from './allPostActionType';

export const getAllPost2=(payload)=>({
    type:GET_ALL_POST,
    payload:payload
})

export const upadtePostLike=(payload)=>({
    type:UPDATE_GET_ALL_POST,
    payload:payload
})
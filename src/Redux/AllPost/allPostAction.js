import { ADD_POST, DELETE_COMMENT,DELETE_POST,
    // SINGLE_LIKE_ON_POST,
     GET_ALL_POST,SHOW_COMMENT_TYPE_INPUT,SHOW_SINGLE_POSTE_ALL_COMMENT,UPDATE_GET_ALL_POST,ADD_COMMENT_TO_POST} from './allPostActionType';

export const getAllPost2=(payload)=>({
    type:GET_ALL_POST,
    payload:payload
});
export const addsinglePost=(payload)=>({
type: ADD_POST,
payload
})
export const upadtePostLike=(payload)=>({
    type:UPDATE_GET_ALL_POST,
    payload:payload
})

export const addComentToPost=(payload)=>({
    type:ADD_COMMENT_TO_POST,
    payload
})
export const deletPost=(payload)=>({
    type:DELETE_POST,
    payload:payload
})

export const show1posttypeAllComment =(payload)=>({

    type:SHOW_SINGLE_POSTE_ALL_COMMENT,
    payload
})

export const showCommentInputBox =(payload)=>({
type:SHOW_COMMENT_TYPE_INPUT,
payload
})

export const deleteCommet =(payload)=>({
type:DELETE_COMMENT,
payload
})
import { GET_ALL_POST,
    DELETE_COMMENT,DELETE_POST,
     ADD_POST,
    //  SINGLE_LIKE_ON_POST,
    SHOW_COMMENT_TYPE_INPUT,
    SHOW_SINGLE_POSTE_ALL_COMMENT,
    UPDATE_GET_ALL_POST,ADD_COMMENT_TO_POST} from './allPostActionType'
const initialState = {
    allPost: [{id:100, user:'shiv', like:'1k'}],
    userOwnPost:[]
};
export const allPostReducer = (store=initialState, action )=>{

    console.log('action inside reducer :', action.payload)
    switch (action.type) {
        case GET_ALL_POST:
            return {
                ...store, allPost:action.payload
            }
        case  ADD_POST:
            return{
                ...store, allPost:[...store.allPost,action.payload]
            }    
        case DELETE_POST:
            return{
                ...store, allPost:action.payload
            }
        case UPDATE_GET_ALL_POST:
            return {...store, allPost:action.payload}
        case ADD_COMMENT_TO_POST:
            return{
                ...store, allPost:action.payload
            }
        case SHOW_SINGLE_POSTE_ALL_COMMENT:
            return{
                ...store , allPost:action.payload
            }
        case   SHOW_COMMENT_TYPE_INPUT:
             return{
                ...store , allPost:action.payload
            }
        case DELETE_COMMENT:
              return{
                ...store , allPost:action.payload
            }
        default:
            return (store)
    }
}
import { GET_ALL_POST,UPDATE_GET_ALL_POST} from './allPostActionType'
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
        
        case UPDATE_GET_ALL_POST:
            // const updatedData=store.allPost.map((item)=> item.id!==action.payload ? item:{...item, totalLike:item?.totalLike+1})
        //   console.log('updatedData ', updatedData)
            return {...store, allPost:action.payload}
        default:
            return (store)
    }
}
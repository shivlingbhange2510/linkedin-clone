import { USER_LOGIN } from './authAction'

const initialState={
    Auth:[{id:'hii', loged:'no userLog'}]
}
export const authReducer=(store=initialState, action)=>{

    switch(action){
        case USER_LOGIN:
            return{...store, Auth:action.payload}
        default:
            return(store)
    }
}

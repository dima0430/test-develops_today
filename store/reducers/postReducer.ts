import PostItem from "../../components/PostItem"
import { ActionPosts, IPostReducer, PostsActionTypes, } from "../../types/redux"


const initialState:IPostReducer={
    posts:[],
    error:null
}

export const postReducer=(state=initialState,action:ActionPosts):IPostReducer=>{
    switch (action.type) {
        case  PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts:action.payload.reverse(),
            }
        case  PostsActionTypes.FETCH_POSTS_ERROR:
            return {
                ...state,
                error:action.payload
            }
        case  PostsActionTypes.ADD_POST_SUCCESS:
            return {
                ...state,
                posts:[action.payload,...state.posts.reverse()],
                error:null
            }
        case  PostsActionTypes.ADD_POST_ERROR:
            return {
                ...state,
                error:action.payload
            }
            default:
            return state;
    }
}
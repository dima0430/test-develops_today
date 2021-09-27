import axios from "axios"
import { Dispatch } from "react"
import { IComment, IPost } from "../../types/posts"
import { ActionPosts, PostsActionTypes } from "../../types/redux"

export const fetchPosts=()=>{
    return async (dispatch:Dispatch<ActionPosts>)=>{
        try {
            const {data}= await axios.get(`https://simple-blog-api.crew.red/posts`)
            dispatch({type:PostsActionTypes.FETCH_POSTS_SUCCESS,payload:data})
        } catch (error) {
            dispatch({
                type:PostsActionTypes.FETCH_POSTS_ERROR,
                payload:'Error loading posts'
            })
        }
    }
}
export const addPost=(obj:IPost)=>{
    return async (dispatch:Dispatch<ActionPosts>)=>{
        try {
            const {data}= await axios.post(`https://simple-blog-api.crew.red/posts`,obj)
            dispatch({type:PostsActionTypes.ADD_POST_SUCCESS,payload:data})
        } catch (error) {
            dispatch({
                type:PostsActionTypes.ADD_POST_ERROR,
                payload:'Error adding post'
            })
        }
    }
}

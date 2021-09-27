import { IComment, IPost } from "./posts";

export interface IPostReducer{
	posts:IPost[],
	error:null|string
}
export enum PostsActionTypes{
    FETCH_POSTS_SUCCESS='FETCH_POSTS_SUCCESS', 
    FETCH_POSTS_ERROR='FETCH_POSTS_ERROR',
    ADD_POST_SUCCESS='ADD_POST_SUCCESS', 
    ADD_POST_ERROR='ADD_POST_ERROR'
}
export interface FetchPostsSuccessAction{
	type:PostsActionTypes.FETCH_POSTS_SUCCESS;
    payload:IPost[]
}
export interface FetchPostsErrorAction{
	type:PostsActionTypes.FETCH_POSTS_ERROR;
    payload:string
}
export interface AddPostSuccessAction{
	type:PostsActionTypes.ADD_POST_SUCCESS;
    payload:IPost
}
export interface AddPostErrorAction{
	type:PostsActionTypes.ADD_POST_ERROR;
    payload:string
}


export type ActionPosts =  FetchPostsSuccessAction | FetchPostsErrorAction | AddPostSuccessAction | AddPostErrorAction 
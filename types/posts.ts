export interface IPost{
	id?:number,
	title:string,
	body:string,
	comments?:IComment[]
}
export interface IComment{
	id?:number,
	postId:number,
    body:string
}
export interface IPostProps{
	post:IPost,
} 
export interface ICommentProps{
	comment:IComment
}
export interface IPostListProps{
	posts:IPost[]
}
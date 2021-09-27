import React from 'react'
import { IPostListProps } from '../types/posts'
import PostItem from './PostItem'
import {Post} from '../styles/postLists'


const PostsList:React.FC<IPostListProps> = ({posts}) => {
    return (
        <ul>
            {posts?.map((post)=>
                <Post key={post.id}>
                    <PostItem post={post}/>		
                </Post>
            )}
        </ul> 
    )
}

export default PostsList

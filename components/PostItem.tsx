import React from 'react'
import { IPost, IPostProps } from '../types/posts'
import { TitlePost,BodyPost } from '../styles/postItem'
import Link from 'next/link'

const PostItem:React.FC<IPostProps> = ({post:{id,title,body}}) => {
    return (
        <div>
            <Link href={`/posts/${id}`}>
                <a>
                    <TitlePost>{title}</TitlePost>
                    <BodyPost>{body}</BodyPost>
                </a>	
            </Link>    
        </div>
    )
}

export default PostItem

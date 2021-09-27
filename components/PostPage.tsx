import React, { ChangeEvent, FormEvent, useState } from 'react'
import { IComment, IPost, IPostProps } from '../types/posts'
import PostItem from './PostItem'
import { WrapperComments, Form, Input, Button, Comment } from '../styles/postPage'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import axios from 'axios'

const PostPage:React.FC<IPostProps> = ({post}) => {
    const [onePost, setOnePost] = useState<IPost>(post)
    const [comment, setComment] = useState<string>('')
    const {comments,id}  = onePost
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setComment(e.target.value)
    }
    const onSubmit = async(e:FormEvent)=>{
        e.preventDefault()
        try {
            const {data}= await axios.post<IComment>(`https://simple-blog-api.crew.red/comments`,{body:comment,postId:id})
            setOnePost(prev=>{return {...prev,comments:prev.comments?[...prev.comments,data]:[data]}})
            setComment('')
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <>
            <PostItem post={post}/>
            <WrapperComments>
                <Form onSubmit={onSubmit}>
                    <Input onChange={onChange} value={comment} type="text" />
                    <Button>Add comment</Button>
                </Form>
                    {comments &&
                        <>
                            <h4>Comments {comments?.length}</h4>
                            <ul>
                                {comments.map(({id,body})=>
                                    <Comment key={id}>{body}</Comment>
                                )}
                            </ul>    
                        </>     
                    }
            </WrapperComments>
        </>
    )
}

export default PostPage

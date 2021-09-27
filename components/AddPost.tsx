import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useActions} from '../hooks/useActions'
import { useTypedSelector} from '../hooks/useTypedSelector'
import { IPost } from '../types/posts'
import {Button} from  '../styles/postPage'
import {Input,Textarea,Label,Error} from  '../styles/addPost'

   
const AddPost = () => {
    const [newPost, setNewPost] = useState<IPost>({title:'',body:''})
    const {addPost} =useActions()
    const {error} = useTypedSelector(state=>state.post)
    const onChange = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
        setNewPost((prev:IPost)=>{return {...prev,...{[e.target.name]:e.target.value}}})
    }

    const onSubmit = async(e:FormEvent)=>{
        e.preventDefault()
        addPost(newPost)
        setNewPost({title:'',body:''})
        
    }
    return (
        <form onSubmit={onSubmit}>
                <Label htmlFor="title"><h3>Title</h3></Label>
                <Input height='40px' value={newPost.title} onChange={onChange} required type="text" id="title" name="title"/>
                <Label htmlFor="body"><h3>Body</h3></Label>
                <Textarea name="body" id="body" value={newPost.body} onChange={onChange} cols={109} rows={10} required/>
                {error && <Error>{error}</Error>}
                <Button>Add</Button>
        </form>
    )
}

export default AddPost

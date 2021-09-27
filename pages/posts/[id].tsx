import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { IPost } from "../../types/posts";
import MainContainer from "../../components/MainContainer";
import PostPage from "../../components/PostPage";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Post:NextPage = ({post}:InferGetServerSidePropsType<typeof getServerSideProps>)=>{
    return( 
    <MainContainer title={`Post: ${post.title}`}>
        <PostPage post={post}/>
    </MainContainer>
    )        
}
export default Post

export const getServerSideProps:GetServerSideProps=async({params})=>{
    const {data:post} =await axios.get<IPost>(`https://simple-blog-api.crew.red/posts/${params?.id}?_embed=comments`)
    return {
        props: {post}
    }
}

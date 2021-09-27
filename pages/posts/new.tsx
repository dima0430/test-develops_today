import { NextPage } from "next"
import AddPost from "../../components/AddPost"
import MainContainer from "../../components/MainContainer"

const NewPost:NextPage = () => {   

    return (
        <MainContainer title={'New Post'}>
            <AddPost/>
        </MainContainer>
    )
}

export default NewPost

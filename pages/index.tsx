import type { NextPage } from 'next'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { NextThunkDispatch, wrapper } from '../store'
import { fetchPosts } from '../store/actions/posts'
import PostsList from '../components/PostsList'
import MainContainer from '../components/MainContainer'

const Index:NextPage=() => {
	const {posts,error}=useTypedSelector(state=>state.post) 
	return (
		<MainContainer title={'Main'}>
			{!error?<PostsList posts={posts}/>:<div>{error}</div>}
		</MainContainer>
	)
}
export default Index

export const getServerSideProps = wrapper.getServerSideProps(async ({store}) => {
    const dispatch = store.dispatch as NextThunkDispatch
    await dispatch(fetchPosts())
})
 
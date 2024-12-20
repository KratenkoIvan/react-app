import { useParams } from 'react-router-dom'
import './PostPage.css'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'
import { FidgetSpinner } from 'react-loader-spinner'

export function PostPage(){
    const params = useParams()
    const {post, isLoading} = usePostById(Number(params.id))
    useTitle(`Post`)

    return(
        <div className='postPage'>
             { isLoading === true ? (<div><FidgetSpinner wrapperClass='loading' backgroundColor='#FFFFE0' ballColors={['#FFD700', '#FFD700', '#FFD700']}/></div>) : ( 
                <>  
                    <h1>{post.title}</h1>
                    <img src={post.cover_image} alt="yo" />
                    <h2>{post.body_markdown}</h2>
                    <p>#{post.tags}</p>
                </>
            )}
        </div>
    )
}
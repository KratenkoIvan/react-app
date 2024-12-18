import { useParams } from 'react-router-dom'
import './PostPage.css'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'

export function PostPage(){
    const params = useParams()
    useTitle(`Post`)
    const {post} = usePostById(Number(params.id))
    
    return(
        <div className='postPage'>
            <h1>{post.title}</h1>
            <img src={post.cover_image} alt="yo" />
            <h2>{post.body_markdown}</h2>
            <p>#{post.tags}</p>
        </div>
    )
}
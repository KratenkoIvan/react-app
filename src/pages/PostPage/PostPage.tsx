import { useParams } from 'react-router-dom'
import './PostPage.css'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'
import { FidgetSpinner } from 'react-loader-spinner'
import { useContext, useState } from 'react'
import { likedPostsContext } from '../../shared/App'

export function PostPage(){
    const params = useParams()
    useTitle(`Post`)
    const {post, isLoading, error} = usePostById(Number(params.id))
    const [likes, setLike] = useState(0)
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const likedPosts = useContext(likedPostsContext)
        const {addPostLike} = likedPosts
        function addLike(){
            setLike(likes + 1)
            setButtonDisabled(true)
            addPostLike(post)
            console.log()
        }
    

    return(
        <div className='postPage'>
            { isLoading === true ? (<div className='loading'><FidgetSpinner 
            backgroundColor='#FFFFE0' 
            ballColors={['#FFD700', '#FFD700', '#FFD700']}
            visible={true}
            height="200"
            width="200"
            ariaLabel="fidget-spinner-loading"
             /></div>) : (!error ? <>
                    <h1>{error}</h1>
                    <h1>{post.title}</h1>
                    <img src={post.social_image} alt="yo" />
                    <div className="postPage-likes">
                        <p>Likes: {likes}</p>
                        <button onClick={addLike} disabled = {isButtonDisabled} className="postButton">👍</button>
                    </div>
                    <h2>{post.body_markdown}</h2>
                    <p>#{post.tags}</p>
                </>
            : <div className='error'>{error}</div>
            )}
        </div>
    )
}
import { useParams } from 'react-router-dom'
import './PostPage.css'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'
import { FidgetSpinner } from 'react-loader-spinner'
import { useEffect } from 'react'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useLikedPostsContext } from '../../context/likedPostContext'

export function PostPage(){
    const params = useParams()
    useTitle(`Post`)
    const {post, isLoading, error} = usePostById(Number(params.id))
        const {likedPosts, addPostLike, removePostLike, isPostLiked} = useLikedPostsContext()
        function likeHandler(){
            if (isPostLiked(post.id)){
                removePostLike(post.id)
            }else {
                addPostLike(post)
            }
        }
    
        useEffect(() => {
            console.log(likedPosts)
        }, [likedPosts])

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
                        { !isPostLiked(post.id) ? 
                        <button onClick={likeHandler} className="postButton"><BiLike size={50} color='white'/></button>
                        :
                        <button onClick={likeHandler} className="postButton"><BiSolidLike size={50} color='white'/></button>
                        }
                    </div>
                    <h2>{post.body_markdown}</h2>
                    <p>#{post.tags}</p>
                </>
            : <div className='error'>{error}</div>
            )}
        </div>
    )
}
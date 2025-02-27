import { useParams } from 'react-router-dom'
import './PostPage.css'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'
import { FidgetSpinner } from 'react-loader-spinner'
import { useEffect } from 'react'
import { BiLike, BiSolidLike } from "react-icons/bi";
// import { BiSolidLike } from "react-icons/bi";
// не надо
import { useLikedPostsContext } from '../../context/likedPostContext'

export function PostPage(){
    const params = useParams()
    useTitle(`Post`)
    const {post, isLoading, error} = usePostById(Number(params.id))
    // табуляция
        const {likedPosts, addPostLike, removePostLike, isPostLiked} = useLikedPostsContext()

        // ButtonLike component 
        function likeHandler(){
            if (isPostLiked(post.id)){
                removePostLike(post.id)
            }else {
                addPostLike(post)
            }
        }
    // не надо
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
                    <h1>{post.name}</h1>
                    {/* <img src={post.social_image} alt="yo" /> */}
                    <div className="postPage-likes">
                        { !isPostLiked(post.id) ? 
                        <button onClick={likeHandler} className="postButton"><BiLike size={50} color='white'/></button>
                        :
                        <button onClick={likeHandler} className="postButton"><BiSolidLike size={50} color='white'/></button>
                        }
                    </div>
                    <h2>{post.description}</h2>
                    <p>{post.time}</p>
                </>
            : <div className='error'>{error}</div>
            )}
        </div>
    )
}
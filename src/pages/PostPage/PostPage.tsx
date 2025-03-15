import { Link, useParams } from 'react-router-dom'
import { usePostById } from '../../hooks/usePostById'
import { useTitle } from '../../hooks/useTitle'
import { FidgetSpinner } from 'react-loader-spinner'
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useLikedPostsContext } from '../../context/likedPostContext'
import './PostPage.css'
import { useUserContext } from '../../context/userContext';
export function PostPage(){
    const params = useParams()
    useTitle(`Post`)
    const {post, isLoading, error} = usePostById(Number(params.id))
    const {addPostLike, removePostLike, isPostLiked} = useLikedPostsContext()
    const {isAuthenticated} = useUserContext()

    function likeHandler(){
        if (isPostLiked(post.id)){
            removePostLike(post.id)
        }else {
            addPostLike(post)
        }
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
                    <h1>{post.name}</h1>
                    <img src={post.image} alt="yo" />
                    <div className="postPage-likes">
                        { !isPostLiked(post.id) ? 
                        <button onClick={likeHandler} className="postButton"><BiLike size={50} color='white'/></button>
                        :
                        <button onClick={likeHandler} className="postButton"><BiSolidLike size={50} color='white'/></button>
                        }
                    </div>
                    <h2>{post.description}</h2>
                    <p>{post.time}</p>
                    <div>
                        { isAuthenticated() ? 
                        <div className='leave-comment'>
                            <h2>Leave a comment:</h2>
                            <textarea className='comment-field'></textarea>
                            <button className='submit-comment'>Submit</button>
                        </div>
                        :
                        
                        <p>Please <Link className='comment-login' to={'/login'}> log in </Link> to comment.</p>
                    }
                        { post.comments && post.comments.length > 0  ? 
                        <div className='comments'>
                            <h3 className='comments-h3'>Comments:</h3>
                            {post.comments.map((comment) => {
                                return <div className='comment-div'>
                                    <h2 className='comment-title'>{comment.title}</h2>
                                    <p className='comment-body'>{comment.body}</p>
                                </div>
                            })}
                        </div>
                        :
                        <p>No comments yet.</p>
                        }
                    </div>
                </>
            : <div className='error'>{error}</div>
            )}
        </div>
    )
}
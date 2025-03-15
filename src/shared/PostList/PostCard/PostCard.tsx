
import './PostCard.css'
import { Link } from "react-router-dom"
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { useLikedPostsContext } from "../../../context/likedPostContext";
import { IPost } from "../../../hooks/usePosts";



export function PostCard(props: IPost){
    const {addPostLike, removePostLike, isPostLiked} = useLikedPostsContext()

    function likeHandler(){
        if (isPostLiked(props.id)){
            removePostLike(props.id)
        } else{
            addPostLike(props)
            }
        }

    return(
        <div className="post">
            <Link to = {`/post/${props.id}`}>
                <h1 className="postName">{props.name}</h1>
                <img className="postImg" src={props.image} alt="" />
                <p className="postDescription">{props.description}</p>
            </Link>
            <div className="postBottom">
                <div className="likes">
                { !isPostLiked(props.id) ? 
                    <button onClick={likeHandler} className="postButton"><BiLike size={40} color='white'/></button>
                    :
                    <button onClick={likeHandler} className="postButton"><BiSolidLike size={40} color='white'/></button>
                }
                </div>
            </div>
        </div>
    )
}
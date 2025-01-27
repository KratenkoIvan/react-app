import { useContext, useEffect, useState } from "react"
import './PostCard.css'
import { Link } from "react-router-dom"
import { likedPostsContext } from "../../App"
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

interface IPostCardProps {
    id: number;
    title: string;
    social_image: string;
    description?: string;
    tags?: string;
    body_markdown?: string;
}

export function PostCard(props: IPostCardProps){
    const {likedPosts, addPostLike, removePostLike, isPostLiked} = useContext(likedPostsContext)
    function likeHandler(){
        if (isPostLiked(props.id)){
            removePostLike(props.id)
        }else {
            addPostLike(props)
            }
        }
        
        useEffect(() => {
            console.log(likedPosts)
        }, [likedPosts])

    return(
        <div className="post">
            <Link to = {`/post/${props.id}`}>
                <h1 className="postName">{props.title}</h1>
                <p className="postDescription">{props.description}</p>
                <img src={props.social_image} className="postImg"/>
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
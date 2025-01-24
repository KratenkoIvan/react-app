import { useContext, useState } from "react"
import './PostCard.css'
import { Link } from "react-router-dom"
import { likedPostsContext } from "../../App"

interface IPostCardProps {
    id: number;
    title: string;
    social_image: string;
    description?: string;
    tags?: string;
    body_markdown?: string;
}

export function PostCard(props: IPostCardProps){
    const [likes, setLike] = useState(0)
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    const likedPosts = useContext(likedPostsContext)
    const {addPostLike} = likedPosts
    function addLike(){
        setLike(likes + 1)
        setButtonDisabled(true)
        addPostLike(props)
        console.log()
    }
    return(
        <div className="post">
            <Link to = {`/post/${props.id}`}>
                <h1 className="postName">{props.title}</h1>
                <p className="postDescription">{props.description}</p>
                <img src={props.social_image} className="postImg"/>
            </Link>
            <div className="postBottom">
                <div className="likes">
                <p className="p-likes">Likes: {likes}</p>
                <button onClick={addLike} disabled = {isButtonDisabled} className="postButton">👍</button>
                </div>
            </div>
        </div>
    )
}
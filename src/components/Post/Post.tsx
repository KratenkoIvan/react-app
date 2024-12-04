import { useState } from "react"
import './Post.css'

interface IPostProps {
    title: string
    description: string
    image: string
    author: string
}

export function Post(props: IPostProps){
    const [likes, setLike] = useState(0)
    const [isButtonDisabled, setButtonDisabled] = useState(false)
    function addLike(){
        setLike(likes + 1)
        setButtonDisabled(true)
    }
    return(
        <div className="post">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image} className="postImg"/>
            <div className="postBottom">
                <div className="likes">
                <p className="p-likes">Likes: {likes}</p>
                <button onClick={addLike} disabled = {isButtonDisabled} className="postButton">👍</button>
                </div>
                <p className="postAuthor">{props.author}</p>
            </div>
        </div>
    )
}
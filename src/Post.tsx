import { useState } from "react"

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
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <img src={props.image}/>
            <p>{props.author}</p>
            <p>Likes: {likes}</p>
            <button onClick={addLike} disabled = {isButtonDisabled} style={{width: '50px', height: '30px', fontSize: '18px'}}>👍</button>
            <hr />
        </div>
    )
}
import { useParams } from 'react-router-dom'
import './PostPage.css'
import { useEffect, useState } from 'react'

export function PostPage(){
    const params = useParams()
    const [postData, setPostData] = useState({
        id: 0,
        title:'',
        cover_image: '',
        tags: '',
        body_markdown: ''
    })
    useEffect(() => {
            async function getPostData(){
                const response = await fetch(`https://dev.to/api/articles/${params.id}`)
                const data = await response.json()
                console.log(data)
                setPostData(data)
            }
            getPostData()
        },[params.id])
    return(
        <div className='postPage'>
            <h1>{postData.title}</h1>
            <img src={postData.cover_image} alt="" />
            <h2>{postData.body_markdown}</h2>
            <p>#{postData.tags}</p>
        </div>
    )
}
import { useParams } from 'react-router-dom'
import './PostPage.css'
import { useEffect, useState } from 'react'
import { usePostById } from '../../hooks/usePostById'

export function PostPage(){
    const params = useParams()
    const {post} = usePostById(Number(params.id))
    
    return(
        <div className='postPage'>
            <h1>{post.title}</h1>
            <img src={post.cover_image} alt="yo" />
            <h2>{post.body_markdown}</h2>
            <p>#{post.tags}</p>
        </div>
    )
}
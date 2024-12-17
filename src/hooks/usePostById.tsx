import { useEffect, useState } from "react"

interface IPost {
    id: number;
    title: string;
    cover_image: string;
    tags: string;
    body_markdown: string;
}
export function usePostById(id: number){
    const [post, setPost] = useState<IPost>({
        id: 0,
        title:'',
        cover_image: '',
        tags: '',
        body_markdown: ''
    })

    useEffect(() => {
                async function getPost(){
                    const response = await fetch(`https://dev.to/api/articles/${id}`)
                    const data = await response.json()
                    console.log(data)
                    setPost(data)
                }
                getPost()
            },[id])

            return {post: post}
}
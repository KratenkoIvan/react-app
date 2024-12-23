import { useEffect, useState } from "react"

interface IPost {
    id: number;
    title: string;
    cover_image: string;
    tags: string;
    body_markdown: string;
}
export function usePostById(id: number){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [post, setPost] = useState<IPost>({
        id: 0,
        title:'',
        cover_image: '',
        tags: '',
        body_markdown: ''
    })

    useEffect(() => {
        async function getPost(){
            try {
                setIsLoading(true)
                const response = await fetch(`https://dev.to/api/articles/${id}`)
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json()
                setPost(data)
            }
            catch (error) {
                const err = error instanceof Error ? error.message : "An unknown error occurred";
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getPost()
    },[id])

    return {post: post, isLoading: isLoading, error: error}
}
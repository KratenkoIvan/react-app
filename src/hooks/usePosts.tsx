import { useEffect, useState } from "react"

export interface IPost{
    id: number,
    title: string,
    description: string,
    social_image: string,
    author: string,
    category: string
}
export function usePosts(){
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<IPost[]>([])
    
    useEffect(() => {
        async function getPosts(){
            const response = await fetch('https://dev.to/api/articles')
            const posts = await response.json()
            setPosts(posts)
            setIsLoading(false)
        }
        getPosts()

    },[])
    return {posts: posts, isLoading: isLoading}
}
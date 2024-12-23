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
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [posts, setPosts] = useState<IPost[]>([])
    
    useEffect(() => {
        async function getPosts(){
            try {
                setIsLoading(true)
                const response = await fetch('https://dev.to/api/articles')
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const posts = await response.json()
                setPosts(posts)
            
            } 
            catch (error) {
                const err = error instanceof Error ? error.message : "An unknown error occurred";
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getPosts()
    },[])
    return {posts: posts, isLoading: isLoading, error}
}
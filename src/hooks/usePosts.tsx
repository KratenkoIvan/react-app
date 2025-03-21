import { useEffect, useState } from "react"

interface IComment{
    id: number;
    title: string;
    body: string;
    userId: number;
    postId: number;
}

export interface IPost{
    id: number;
    name: string;
    description: string;
    tagId?: number;
    time?: string;
    author?: string;
    image: string;
    comments?: IComment[];
}
export function usePosts(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [posts, setPosts] = useState<IPost[]>([])
    
    useEffect(() => {
        async function getPosts(){
            try {
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/post/all')
                const result = await response.json()
                if (result.status === 'error'){
                    setError(result.message)
                }else{
                    setPosts(result.data)
                    console.log(result.data)
                }
                
            
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
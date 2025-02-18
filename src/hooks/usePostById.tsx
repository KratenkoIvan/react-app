import { useEffect, useState } from "react"
import { IPost } from "./usePosts"

export function usePostById(id: number){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [post, setPost] = useState<IPost>({
        id: 0,
        name:'',
        description: '',
        time: '',
        author: ''
    })

    useEffect(() => {
        async function getPost(){
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:8000/api/post/${id}`)
                const result = await response.json()
                if (result.status === 'error'){
                    setError(result.message)
                }else{
                    setPost(result.data)
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
        getPost()
    },[id])

    return {post: post, isLoading: isLoading, error: error}
}
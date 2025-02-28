import { useEffect, useState } from 'react'

interface ITag {
    id: number;
    name:string
}
export function useTags() {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    const [tags, setTags] = useState<ITag[]>([])
    useEffect(()=>{
        async function getTags(){
            try{
                setIsLoading(true)
                const response = await fetch('http://localhost:8000/api/tag/all')
                const result = await response.json()
                if (result.status === 'error'){
                    setError(result.message)
                } else{
                    setTags(result.data)
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
        getTags()
    },[])
    return {tags: tags, isLoading: isLoading, error}
}
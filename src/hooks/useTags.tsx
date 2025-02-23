import { useEffect, useState } from 'react'

interface ITag {
    id: number;
    name:string
}
export function useTags() {
    const [tags, setTags] = useState<ITag[]>([])
    useEffect(()=>{
        async function getTags(){
            const response = await fetch('http://localhost:8000/api/tag/all')
            const result = await response.json()
            setTags(result.data)
        }
        getTags()
    },[])
    return {tags: tags}
}
import { createContext, ReactNode, useContext, useState } from "react"
import { IPost } from "../hooks/usePosts"


interface ILikedPostsContext{
    likedPosts: IPost[]
    addPostLike: (post: IPost)=> void
    removePostLike: (id: number) => void
    isPostLiked: (id: number) => boolean
}

interface ILikedPostsContextProviderProps{
    children?: ReactNode
}

const initialValue: ILikedPostsContext = {
    likedPosts: [],
    addPostLike: (post: IPost) => {},
    removePostLike: (id: number) => {},
    isPostLiked: (id: number) => false
}

const likedPostsContext = createContext<ILikedPostsContext>(initialValue)

export function useLikedPostsContext(){
    return useContext(likedPostsContext)
}

export function LikedPostsContextProvider(props: ILikedPostsContextProviderProps){
    const {children} = props
    const [likedPosts, setLikedPosts] = useState<IPost[]>([])

    function addPostLike (post: IPost) {
        let array = [...likedPosts, post]
        setLikedPosts(array)
    }

    function removePostLike (id: number) {
        let array = likedPosts.filter((post) => {
            return post.id !== id
        })
        setLikedPosts(array)
    }

    function isPostLiked(id: number) {
        return likedPosts.some((post) => post.id === id)
    }

    return (
        <likedPostsContext.Provider
            value = {{
                likedPosts: likedPosts,
                addPostLike: addPostLike,
                removePostLike: removePostLike,
                isPostLiked: isPostLiked
            }}>
                {children}
        </likedPostsContext.Provider>
    )
}
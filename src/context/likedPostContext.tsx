import { createContext, ReactNode, useContext, useState } from "react"
import { IPost } from "../hooks/usePosts"


interface ILikedPostsContext{
    likedPosts: IPost[]
    addPostLike: (post: IPost)=> void
    removePostLike: (id: number) => void
    isPostLiked: (id: number) => boolean
}
// children можно указать опциональными
interface ILikedPostsContextProviderProps{
    children: ReactNode
}
// табуляция
const initialValue: ILikedPostsContext = {
        likedPosts: [],
        addPostLike: (post: IPost) => {},
        removePostLike: (id: number) => {},
        isPostLiked: (id: number) => false
    }
// export не надо
export const likedPostsContext = createContext<ILikedPostsContext>(initialValue)

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
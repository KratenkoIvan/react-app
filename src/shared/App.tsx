import { Layout } from "./Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { MainPage } from "../pages/MainPage/MainPage"
import { PostListPage } from "../pages/PostListPage/PostListPage"
import { createContext, useState } from "react"
import { IPost } from "../hooks/usePosts"


interface ILikedPostsContext{
    likedPosts: IPost[]
    addPostLike: (post: IPost)=> void
    removePostLike: (id: number) => void
    isPostLiked: (id: number) => boolean
}

const initialValue: ILikedPostsContext = {likedPosts: [], addPostLike: (post: IPost) => {}, removePostLike: (id: number) => {}, isPostLiked: (id: number) => false}
export const likedPostsContext = createContext<ILikedPostsContext>(initialValue)

export function App(){

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


    return(
        <div>
            <likedPostsContext.Provider value = {{likedPosts: likedPosts, addPostLike: addPostLike, removePostLike: removePostLike, isPostLiked: isPostLiked}}>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path ='/' element = {<MainPage></MainPage>}></Route>
                        <Route path ='/posts' element = {<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element = {<PostPage></PostPage>}></Route>
                        <Route path ='/*' element = {<NotFoundPage></NotFoundPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            </likedPostsContext.Provider>
            
        </div>
    )
}

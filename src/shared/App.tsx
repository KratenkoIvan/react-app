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
}

const initialValue: ILikedPostsContext = {likedPosts: [], addPostLike: (post: IPost) => {}}
export const likedPostsContext = createContext<ILikedPostsContext>(initialValue)

export function App(){

    const [likedPosts, setLikedPosts] = useState<IPost[]>([])

    function addPostLike (post: IPost) {
        let array = [...likedPosts, post]
        setLikedPosts(array)
        console.log(likedPosts)
    }

    return(
        <div>
            <likedPostsContext.Provider value = {{likedPosts: likedPosts, addPostLike: addPostLike}}>
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

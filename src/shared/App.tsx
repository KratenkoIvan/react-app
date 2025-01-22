import { Layout } from "./Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { MainPage } from "../pages/MainPage/MainPage"
import { PostListPage } from "../pages/PostListPage/PostListPage"
import { createContext } from "react"

interface ILikedPosts{
    likedPost: string
    addLike: ()=> void
}

const initialValue: ILikedPosts[] = []
const likedPostsContext = createContext<ILikedPosts[]>(initialValue)

export function App(){
    return(
        <div>
            <likedPostsContext.Provider value = {{likedPosts: [], addLike: () => {}}}>
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

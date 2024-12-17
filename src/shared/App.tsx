import { Layout } from "./Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { Error } from "./Error/Error"
import { MainPage } from "../pages/MainPage/MainPage"
import { PostListPage } from "../pages/PostListPage/PostListPage"

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path ='/' element = {<MainPage></MainPage>}></Route>
                        <Route path ='/posts' element = {<PostListPage></PostListPage>}></Route>
                        <Route path="/post/:id" element = {<PostPage></PostPage>}></Route>
                        <Route path ='/*' element = {<Error></Error>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

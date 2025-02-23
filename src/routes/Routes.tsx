import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostPage } from "../pages/PostPage/PostPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"
import { MainPage } from "../pages/MainPage/MainPage"
import { PostListPage } from "../pages/PostListPage/PostListPage"
import { Layout } from "../shared/Layout/Layout"
import { LikedPostsPage } from "../pages/LikedPostsPage/LikedPostsPage"
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { RegisterPage } from "../pages/RegisterPage/RegisterPage"

export function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Layout></Layout>}>
                    <Route path ='/' element = {<MainPage></MainPage>}></Route>
                    <Route path ='/posts' element = {<PostListPage></PostListPage>}></Route>
                    <Route path = '/liked' element = {<LikedPostsPage></LikedPostsPage>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                    <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
                    <Route path="/post/:id" element = {<PostPage></PostPage>}></Route>
                    <Route path ='/*' element = {<NotFoundPage></NotFoundPage>}></Route>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
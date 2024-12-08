import { PostList } from "./Postlist/PostList"
import { Layout } from "./Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PostPage } from "./PostPage/PostPage"
import { Error } from "./Error/Error"

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path ='/posts' element = {<PostList></PostList>}></Route>
                        <Route path="/post/:id" element = {<PostPage></PostPage>}></Route>
                        <Route path ='/*' element = {<Error></Error>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

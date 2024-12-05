import { PostList } from "./Postlist/PostList"
import { Layout } from "./Layout/Layout"
import { Header } from './Header/Header'
import { Footer } from "./Footer/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element = {<Layout></Layout>}>
                        <Route path = '/' element = {<PostList></PostList>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

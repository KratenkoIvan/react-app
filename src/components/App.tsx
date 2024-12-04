import { PostList } from "./Postlist/PostList"
import { Layout } from "./Layout/Layout"
import { Header } from './Header/Header'
import { Footer } from "./Footer/Footer"

export function App(){
    return(
        <div>
            <Layout>
                <Header></Header>
                <PostList></PostList>
                <Footer></Footer>
            </Layout>
        </div>
    )
}

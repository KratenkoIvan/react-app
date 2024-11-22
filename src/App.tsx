import { PostList } from "./PostList"

export function App(){
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Forum</h1>
            <p style={{fontSize: '20px'}}>This is very cool forum</p>
            <img src="https://papik.pro/uploads/posts/2022-08/1661918702_2-papik-pro-p-smailik-laik-pokazivaet-png-2.jpg" />
            <hr/>
            <PostList></PostList>
        </div>
    )
}

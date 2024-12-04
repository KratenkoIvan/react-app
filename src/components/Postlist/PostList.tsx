import { Post } from "../Post/Post"
import './PostList.css'


export function PostList(){
    const posts = [
        {id: 0, title: 'Post 1', description: 'Post 1 description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOdr0S3e2m4yVYuf-bthpSxY9MjyMrv97hA&s', author: 'Author 1'},
        {id: 1, title: 'Post 2', description: 'Post 2 description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOdr0S3e2m4yVYuf-bthpSxY9MjyMrv97hA&s', author: 'Author 2'},
        {id: 2, title: 'Post 3', description: 'Post 3 description', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLOdr0S3e2m4yVYuf-bthpSxY9MjyMrv97hA&s', author: 'Author 3'},
    ]

    return (
        <div className="postList">
            {posts.map((post)=> {
                return <Post title = {post.title} description = {post.description} image = {post.image} author = {post.author}></Post>
            }
            )}

        </div>
    )
}
import { useTitle } from "../../hooks/useTitle";
import { PostList } from "../../shared/PostList/PostList";
import './PostListPage.css'

export function PostListPage(){
    useTitle("Post list")
    return (
        <PostList></PostList>
    )
}
import { useLikedPostsContext } from "../../context/likedPostContext"
import { useTitle } from "../../hooks/useTitle"
import { PostCard } from "../../shared/PostList/PostCard/PostCard"
import './LikedPostsPage.css'

export function LikedPostsPage(){
    const { likedPosts } = useLikedPostsContext()
    useTitle(`Liked Posts`)
    return(
        <div className="liked-posts-list">
            {likedPosts.map((post)=>{
                return <PostCard key={post.id} id = {post.id} title = {post.title} description = {post.description} body_markdown = {post.body_markdown} social_image = {post.social_image}></PostCard>
            })}
        </div>
    )
}
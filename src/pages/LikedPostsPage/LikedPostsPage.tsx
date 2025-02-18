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
                return <PostCard key={post.id} id = {post.id} name = {post.name} description = {post.description}></PostCard>
            })}
        </div>
    )
}
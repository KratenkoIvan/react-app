import { useEffect, useState } from "react"
import { PostCard } from "./PostCard/PostCard"
import { usePosts } from "../../hooks/usePosts";
import { FidgetSpinner } from "react-loader-spinner";
import { useTags } from "../../hooks/useTags";
import './PostList.css'

export function PostList(){
    const {posts, isLoading: isLoadingPosts, error: errorPosts} = usePosts()
    const {tags, isLoading: isLoadingTags, error: errorTags} = useTags()
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedTag, setSelectedTag] = useState<number>(0)
    

    useEffect(() => {
        if (selectedTag === 0){
            setFilteredPosts(posts)
        } else {
            setFilteredPosts(posts.filter((post)=> {
                return post.tagId === selectedTag
            }))
        }
    }, [selectedTag, posts])

    return (
        <div className="postList">
            { isLoadingPosts || isLoadingTags === true ? (<div className="loading"><FidgetSpinner 
            backgroundColor='#FFFFE0' 
            ballColors={['#FFD700', '#FFD700', '#FFD700']}
            visible={true}
            height="200"
            width="200"
            ariaLabel="fidget-spinner-loading"
             /></div>) : (!errorPosts || !errorTags ? <>
                    <select onChange={(event)=>{
                        setSelectedTag(+event.target.value)
                    }}>
                        <option value={0}>All</option>
                        {tags && tags.map(tag => {
                            return <option value={tag.id}>{tag.name}</option>
                        })}
                    </select>
                     
                    {filteredPosts.map((post)=> {
                        return <PostCard key={post.id} id = {post.id} name = {post.name} description = {post.description}></PostCard>
                    }
                    )}
                </>
            : <div className="error">{errorPosts || errorTags}</div>
            )}
        </div>
    )
}
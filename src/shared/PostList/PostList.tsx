import { useEffect, useState } from "react"
import { PostCard } from "./PostCard/PostCard"
import { usePosts } from "../../hooks/usePosts";
import './PostList.css'
import { FidgetSpinner } from "react-loader-spinner";

// const posts = [
//     {id: 0, category: 'Cats', title: 'Cute cat', description: 'A very cute cat', social_image: 'https://www.womansworld.com/wp-content/uploads/2024/08/cute-cats.jpg?w=1200&h=630&crop=1&quality=86&strip=all', author: 'Cat Author'},
//     {id: 1, category: 'Programming', title: 'Useful guide', description: 'How to create a function in JS', social_image: 'https://sourcebae.com/blog/wp-content/uploads/2023/08/maxresdefault-27.jpg', author: 'Smart programmer'},
//     {id: 2, category: 'Games', title: 'Herald I', description: 'I got a new rank', social_image: 'https://dotesports.com/wp-content/uploads/wp-content/uploads/2020/10/12093651/herald.jpg', author: 'Pro'},
//     {id: 3, category: 'Cats', title: 'Cool cat', description: 'A very cool cat', social_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXcY2Ua1F5kVJ6QDuUc3fBNRArABIMnAgpow&s', author: 'Cat author'},
//     {id: 4, category: 'Food', title: 'Pizza', description: 'My favorite pizza', social_image: 'https://www.allrecipes.com/thmb/9UTj7kZBJDqory0cdEv_bw6Ef_0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-2x1-BG-2976-d5926c9253d3486bbb8a985172604291.jpg', author: 'Pizza lover'},
// ]

export function PostList(){
    const {posts, isLoading, error} = usePosts()
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(() => {
        if (selectedCategory === 'All'){
            setFilteredPosts(posts)
        } else {
            // setFilteredPosts(posts.filter((post)=> {
            //     return post.category === selectedCategory
            // }))
        }
    }, [selectedCategory, posts])

    return (
        <div className="postList">
            { isLoading === true ? (<div className="loading"><FidgetSpinner 
            backgroundColor='#FFFFE0' 
            ballColors={['#FFD700', '#FFD700', '#FFD700']}
            visible={true}
            height="200"
            width="200"
            ariaLabel="fidget-spinner-loading"
             /></div>) : (!error ? <>
                    <select onChange={(event)=>{
                        setSelectedCategory(event.target.value)
                    }}>
                        <option value="All">All</option>
                        <option value="Programming">Programming</option>
                        <option value="Games">Games</option>
                        <option value="Cats">Cats</option>
                        <option value="Food">Food</option>
                    </select>
                     
                    {filteredPosts.map((post)=> {
                        return <PostCard key={post.id} id = {post.id} name = {post.name} description = {post.description}></PostCard>
                    }
                    )}
                </>
            : <div className="error">{error}</div>
            )}
        </div>
    )
}
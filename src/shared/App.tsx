import { LikedPostsContextProvider } from "../context/likedPostContext"
import { AppRoutes } from "../routes/Routes"

export function App(){

    return(
        <div>
            <LikedPostsContextProvider>
                <AppRoutes></AppRoutes>
            </LikedPostsContextProvider>    
        </div>
    )
}

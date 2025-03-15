import { LikedPostsContextProvider } from "../context/likedPostContext"
import { UserContextProvider } from "../context/userContext"
import { AppRoutes } from "../routes/Routes"

export function App(){

    return(
        <div>
            <UserContextProvider>
                <LikedPostsContextProvider>
                    <AppRoutes></AppRoutes>
                </LikedPostsContextProvider>    
            </UserContextProvider>
        </div>
    )
}

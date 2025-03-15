import { useUserContext } from "../../context/userContext"
import './ProfilePage.css'

export function ProfilePage(){
    const {user, logout} = useUserContext()
    
    return (
        <div className="profile-page">
            {
                user ? (
                    <div className="user-info">
                        <h1>Username: {user.username}</h1>
                        <h1>Email: {user.email}</h1>
                        <button onClick={logout} className="logout-button">Logout</button>
                    </div>
                ) : (
                    <h1>Please log in to view your profile</h1>
                )
            }
        </div>
    )
}
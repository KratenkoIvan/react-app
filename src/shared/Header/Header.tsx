import { Link } from 'react-router-dom'
import './Header.css'
import { useUserContext } from '../../context/userContext'

export function Header(){
    const {isAuthenticated} = useUserContext()
    return(
        <header className="header">
            <Link to = {'/'}>Main</Link>
            <Link to = {'/posts'}>Posts</Link>
            <Link to = {'/liked'}>Liked</Link>
            {isAuthenticated() ? 
            <Link to = {'/profile'}>Profile</Link>
            :
            <>
                <Link to = {'/login'}>Login</Link>
                <Link to = {'/register'}>Register</Link>
            </>
            }
        </header>
    )
    
}
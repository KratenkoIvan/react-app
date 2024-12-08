import { Link } from 'react-router-dom'
import './Header.css'

export function Header(){
    return(
        <header className="header">
            <Link to = {'/'}>Main</Link>
            <Link to = {'/posts'}>Posts</Link>
            <Link to = {'/login'}>Login</Link>
            <Link to = {'/register'}>Register</Link>
        </header>
    )
    
}
import { useTitle } from '../../hooks/useTitle'
import './NotFoundPage.css'

export function NotFoundPage(){
    useTitle("Not Found")
    return(
        <div className='error'>
            <h1>404</h1>
            <h1>Page not found</h1>
        </div>
    )
}
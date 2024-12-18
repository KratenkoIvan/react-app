import { useTitle } from '../../hooks/useTitle'
import './MainPage.css'

export function MainPage(){
    useTitle("Main")
    return (
        <div className="main-page">
            <h1>Hello world</h1>
        </div>
    )
}
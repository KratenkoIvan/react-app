import { ReactNode } from 'react'
import './Main.css'

interface IMainProps {
    children?: ReactNode
}
export function Main(props: IMainProps){
    return (
        // Main -> main
        <div className='Main'>
            {props.children}
        </div>
    )
}
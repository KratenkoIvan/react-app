import { ReactNode } from 'react'
import './Main.css'

interface IMainProps {
    children?: ReactNode
}
export function Main(props: IMainProps){
    return (
        <div className='main'>
            {props.children}
        </div>
    )
}
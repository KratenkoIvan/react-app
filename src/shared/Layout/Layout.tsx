import { ReactNode } from "react";
import './Layout.css'
import { Header } from "../../shared/Header/Header";
import { Main } from "../../shared/Main/Main";
import { Footer } from "../../shared/Footer/Footer";
import { Outlet } from "react-router-dom";

interface ILayoutProps{
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return(
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}
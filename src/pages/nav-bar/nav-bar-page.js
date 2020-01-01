import React from 'react'
import NavBar from "../../components/navbar/nav-bar";
import NavBarButton from "../../components/navbar/button/nav-bar-button";

import Routes from "../../routes"

import {
    BrowserRouter,
    Link
} from "react-router-dom";

export default class NavBarPage extends React.Component
{
    render() {

        return (
        <BrowserRouter>
            <NavBar>
                <NavBarButton>
                    <Link to={"/"}>Home</Link>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/contact"}>Contact</Link>
                </NavBarButton>
                <NavBarButton>
                    <span style={{margin: "5px 10px"}}><Link to={"/"}>gyskate.com</Link></span>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/upload"}>Upload</Link>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/about"}>About</Link>
                </NavBarButton>
            </NavBar>
            <Routes/>
        </BrowserRouter>
        )
    }
}
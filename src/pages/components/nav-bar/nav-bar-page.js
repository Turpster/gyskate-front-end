import React from 'react'
import NavBar from "../../../components/navbar/nav-bar";
import NavBarButton from "../../../components/navbar/button/nav-bar-button";

import Routes from "../../../routes"

import "./nav-bar-page.css"

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
                    <Link to={"/"}>Content</Link>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/upload"}>Upload</Link>
                </NavBarButton>
                <NavBarButton>
                    <span id={"logo"}><Link to={"/"}>gyskate</Link></span>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/about"}>About</Link>
                </NavBarButton>
                <NavBarButton>
                    <Link to={"/contact"}>Contact</Link>
                </NavBarButton>
            </NavBar>
            <Routes/>
        </BrowserRouter>
        )
    }
}
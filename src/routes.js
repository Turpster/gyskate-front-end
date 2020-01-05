import React from 'react'

import {
    Switch,
    Route
} from "react-router-dom";

import ContentPage from "./pages/content-page/content-page";
import ContactPage from "./pages/contact-page/contact-page";
import AboutPage from "./pages/about-page/about-page";
import UploadPage from "./pages/upload-page/upload-page";

export default class Routes extends React.Component
{
    render() {
        return (
            <Switch>
                <Route exact path={"/"}>
                    <ContentPage/>
                </Route>
                <Route exact path={"/contact"}>
                    <ContactPage/>
                </Route>
                <Route exact path={"/about"}>
                    <AboutPage/>
                </Route>
                <Route exact path={"/upload"}>
                    <UploadPage/>
                </Route>
            </Switch>
        );
    }
}

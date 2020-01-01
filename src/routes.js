import React from 'react'

import {
    Switch,
    Route
} from "react-router-dom";

export default class Routes extends React.Component
{
    render() {
        return (
            <Switch>
                <Route exact path={"/"}>
                    <h1>Home</h1>
                </Route>
                <Route exact path={"/contact"}>
                    <h1>Contact</h1>
                </Route>
                <Route exact path={"/about"}>
                    <h1>About</h1>
                </Route>
                <Route exact path={"/upload"}>
                    <h1>Upload</h1>
                </Route>
            </Switch>
        );
    }
}

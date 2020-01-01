import React from 'react';
import "./nav-bar.css"

export default class NavBar extends React.Component
{
    render() {
        return (
            <div className={"nav-bar"}>
                {this.props.children}
            </div>
        )
    }
}
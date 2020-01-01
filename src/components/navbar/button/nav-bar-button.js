import React from 'react';
import "./nav-bar-button.css"

export default class NavBarButton extends React.Component
{
    render() {
        return (
            <div className={"nav-bar-button"}>
                {this.props.children}
            </div>
        )
    }
}
import React from 'react'
import "./nav-bar-image.css"

export default class NavBarImage extends React.Component
{
    render() {

        return (
        <img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width}/>
        )
    }
}
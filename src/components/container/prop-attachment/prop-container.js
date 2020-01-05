import React from 'react'

import "./prop-container.css"


export default class PropContainer extends React.Component
{
    render() {
        return (
            <div className={"prop-container"}>
                {this.props.children}
            </div>
        )
    }
}
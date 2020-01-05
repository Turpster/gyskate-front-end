import React from 'react'

import "./gy-page-container.css"

export default class GyPageContainer extends React.Component
{
    render() {
        return (
            <div className={"page-contain"}>
                {this.props.children}
            </div>
        )
    }
}

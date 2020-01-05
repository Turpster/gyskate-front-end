import React from 'react'

import "./banner.css"

import PropTypes from "proptypes/src";

export default class Banner extends React.Component
{
    propTypes = {
        height: PropTypes.number
    };

    render() {
        return (
            <div className={"banner"} style={{height: this.props.height}}>
                {this.props.children}
            </div>
        )
    }
}
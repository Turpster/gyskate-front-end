import React from 'react'

import "./prop-container.css"
import PropTypes from "proptypes/src";


export default class PropContainer extends React.Component
{
    static propTypes = {
        style: PropTypes.shape({
            k0: PropTypes.arrayOf(PropTypes.symbol),
            k1: PropTypes.arrayOf(PropTypes.object)
        })
    };

    render() {
        return (
            <div className={"prop-container"} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}
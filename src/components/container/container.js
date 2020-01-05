import React from 'react'

import "./container.css"
import PropTypes from "proptypes/src";

export default class Container extends React.Component
{
    static propTypes = {
        justifyContent: PropTypes.string,
        id: PropTypes.string
    };

    static defaultProps = {
        justifyContent: "left"
    };

    render() {

        return (
            <div className={"container"} style={Object.assign({}, {justifyContent: this.props.justifyContent}, this.props.style)} id={this.props.id}>
                {this.props.children}
            </div>
        )
    }
}
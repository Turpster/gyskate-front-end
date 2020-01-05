import React from 'react'


import "./icon.css"
import PropTypes from "proptypes/src";

export default class Icon extends React.Component
{
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
        alt: PropTypes.string,
        src: PropTypes.string
    };

    static defaultProps = {
        height: "30px",
        width: "20px"
    };

    render() {
        if (this.props.src.toUpperCase().endsWith(".PNG")) {
            return (
                <img className={"icon"} src={this.props.src} alt={this.props.alt} width={this.props.width}
                     height={this.props.height}/>
            )
        }
        else
        {

            console.table([this.props.width, this.props.height]);

            return (
                <div className={"icon svg"} style={{maskImage: "url('" + this.props.src + "')", height: this.props.height, width: this.props.width}}/>
            )
        }
    }
}

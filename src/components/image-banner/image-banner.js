import React from 'react'

import "./image-banner.css"
import Banner from "../banner/banner";

import PropTypes from "proptypes/src";


export default class ImageBanner extends Banner
{
    static propTypes = {
        src: PropTypes.string,
        height: PropTypes.number,
        alt: PropTypes.string,
        corner: PropTypes.string
    };

    render() {
        return (
            <div className={"image-contain"}>
                <img src={this.props.src} height={this.props.height} width={"100%"} alt={this.props.alt} className={"banner"}/>
                <div className={"banner-caption " + this.props.corner}>{this.props.children}</div>
            </div>
        )
    }
}
import React from 'react'

import PropTypes from "proptypes/src";

import "./image-banner.css"

export default class ImageBannerSlideshow extends React.Component
{
    static propTypes = {
        alt: PropTypes.arrayOf(PropTypes.string),
        height: PropTypes.number,
        corner: PropTypes.string,
        src: PropTypes.arrayOf(PropTypes.string),
        transitionDuration: PropTypes.number
    };


    nextImage()
    {
        if (this.props.src.length -1 !== this.imageIndex) this.imageIndex++;
        else this.imageIndex = 0;
        this.forceUpdate();
    }

    constructor(props) {
        super(props);
        setInterval(() => {this.nextImage(props)}, props.transitionDuration);
    }

    render() {
        return (
        <div className={"image-contain"}>
            <img src={this.props.src[this.imageIndex]} height={this.props.height} width={"100%"} alt={this.props.alt[this.imageIndex]} className={"banner"}/>
            <div className={"banner-caption " + this.props.corner}>{this.props.children}</div>
        </div>
        )
    }
}
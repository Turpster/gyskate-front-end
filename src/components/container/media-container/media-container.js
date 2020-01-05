import React from 'react'
import Container from "../container";

import RecordIcon from "../../../assets/icons/record/record.svg"
import PhotoIcon from "../../../assets/icons/photo/photo.svg"
import SkateboardIcon from "../../../assets/icons/skateboard/skateboard.svg"

import "./media-container.css"
import "../container.css"

import PropTypes from "proptypes/src";
import Icon from "../../../components/icon/icon";
import PropContainer from "../prop-attachment/prop-container";

import MediaContainerType from "./media-container-type";

export default class MediaContainer extends React.Component
{
    static propTypes = Object.assign({}, super.propTypes, {
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.objectOf(typeof(MediaContainerType)),
        fullView: PropTypes.bool,
        width: PropTypes.number,
        height: PropTypes.number,
        skater: PropTypes.number.isRequired
    });

    static defaultProps = {
        width: "250px",
        height: "250px",
        fullView: false
    };

    constructor(props) {
        super(props);
        this.state = {fullView: props.fullView,
                      width: props.width,
                      height: props.height
        };
    }

    render() {

        let header;
        let footer;
        let content;

        if (this.state.fullView)
        {
            header = (
            <PropContainer>
                <Container>
                    <div className={"media-container-content-title"}>{this.props.title}</div>
                    <Icon src={SkateboardIcon} alt={"Skater"} width={"32px"}/>
                    <div className={"media-container-content-skater"}>
                        Reece Scott
                    </div>
                </Container>
            </PropContainer>
        );
            footer =
                (
                    <PropContainer>
                        <div className={"media-container-description"}>
                            <p>
                            {this.props.children}
                            </p>
                        </div>
                    </PropContainer>
                )
            
        }
        else
        {
            header = (<></>);
            footer = (<></>);
        }
            content = (
                <div className={"media-container-background"}>
                    <Icon src={this.props.type === MediaContainerType.Video ? RecordIcon : PhotoIcon} height={"60%"} width={"60%"}/>
                </div>);

        return (
            <div className={"media-container"} style={{width: this.state.width}}>
                {header}
                <div className={"media-container-content"} style={{width: this.state.width, height: this.state.height, backgroundImage: "url('" + this.props.thumbnail + "')"}}>
                    {content}
                </div>
                {footer}
            </div>
        );
    }
}
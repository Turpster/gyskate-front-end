import React from 'react'
import GyPageComponent from "../gy-page-component";

import "./content-page.css"

import GyPageContainer from "../../components/page-container/gy-page-container";
import Icon from "../../components/icon/icon";

import GridIcon from "../../assets/icons/grid/grid.svg"
import ListIcon from "../../assets/icons/list/list.svg"
import Container from "../../components/container/container";
import MediaContainer from "../../components/container/media-container/media-container";
import MediaContainerType from "../../components/container/media-container/media-container-type";

var mediaContainers;

export default class ContentPage extends GyPageComponent {
    _render() {

        mediaContainers = [];

        return (
            <GyPageContainer>
                <Container justifyContent={"right"}>
                    <a onClick={
                        () => {
                            for (let i = 0; i < mediaContainers.length; i++)
                            {
                                let mediaContainer = mediaContainers[i];

                                mediaContainer.current.state.fullView = false;
                                mediaContainer.current.state.width = MediaContainer.defaultProps.width;
                                mediaContainer.current.state.height = MediaContainer.defaultProps.height;
                                mediaContainer.current.forceUpdate();
                            }
                        }
                    }><Icon src={GridIcon} alt={"Gird Layout"}/></a>
                    <a onClick={
                        () => {
                            for (let i = 0; i < mediaContainers.length; i++)
                            {
                                let mediaContainer = mediaContainers[i];

                                mediaContainer.current.state.width = "100%";
                                mediaContainer.current.state.height = "85vh";
                                mediaContainer.current.state.fullView = true;
                                mediaContainer.current.forceUpdate()
                            }
                        }
                    }><Icon src={ListIcon} alt={"List Layout"}/></a>
                </Container>
                <Container justifyContent={"center"} style={{flexWrap: "wrap"}}>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                    <MediaContainer title={"Google Chrome"} ref={createMediaContainerRef()} type={MediaContainerType.Photo} thumbnail={"https://cdn.vox-cdn.com/thumbor/GB2P-g7D11oCDSLGVvaNo4s5xb0=/0x0:880x586/1200x800/filters:focal(369x223:509x363)/cdn.vox-cdn.com/uploads/chorus_image/image/59767691/chrome_logo.0.jpg"}>
                        This is a test description for Google Chrome
                    </MediaContainer>
                </Container>
            </GyPageContainer>
        )
    }
}

function createMediaContainerRef()
{
    let ref = React.createRef();
    mediaContainers.push(ref);
    return ref;

}
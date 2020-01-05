import React from 'react'
import Banner from "../../../components/banner/banner";
import Container from "../../../components/container/container";
import Icon from "../../../components/icon/icon";

import InstagramLogo from "../../../assets/icons/branding/instagram/instagram-logo.svg"

export default class FooterPage extends React.Component
{
    render()
    {
        return (
            <Banner>
                <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" target={"_blank"}>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target={"_blank"}>www.flaticon.com</a></div>
                <Container justifyContent={"center"}>
                    <a href={"https://www.instagram.com/gyskate/"} target={"_blank"}>
                        <Icon src={InstagramLogo} alt={"Instagram Logo"}/>
                    </a>
                </Container>
            </Banner>
        );
    }
}
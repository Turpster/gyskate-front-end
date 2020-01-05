import React from 'react'
import GyPageComponent from "../gy-page-component";

import "./upload-page.css"
import PropContainer from "../../components/container/prop-attachment/prop-container";
import GyPageContainer from "../../components/page-container/gy-page-container";
import UploadForm from "../components/upload-form/upload-form";

export default class UploadPage extends GyPageComponent
{
    _render() {
        return (
            <GyPageContainer>
                <PropContainer>
                    <p>
                        To submit content to gyskate, please do the following.
                        <ol>
                            <li>Email <a href={"mailto:turpster@turpster.net"}>turpster@turpster.net</a> or contact Turpster and ask for an account.</li>
                            <li>Submit your content with your login credentials down below.</li>
                            <li>Your content should be available on gyskate.</li>
                        </ol>
                        <UploadForm/>
                    </p>
                </PropContainer>
            </GyPageContainer>
        )
    }
}
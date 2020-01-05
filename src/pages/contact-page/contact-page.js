import React from 'react'
import GyPageComponent from "../gy-page-component";

import './contact-page.css'
import GyPageContainer from "../../components/page-container/gy-page-container";
import PropContainer from "../../components/container/prop-attachment/prop-container";
import QueryForm from "../components/query-form/query-form";

export default class ContactPage extends GyPageComponent
{
    _render() {
        return (
            <GyPageContainer>
                <PropContainer>
                    <h1>Contact Info</h1>
                    <p>
                        Email: <a href={"mailto:turpster@turpster.net"}>turpster@turpster.net</a>
                    </p>
                    <h1>Query</h1>
                    <QueryForm/>
                </PropContainer>
            </GyPageContainer>
        )
    }
}
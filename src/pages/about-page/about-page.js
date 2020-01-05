import React from 'react'
import GyPageComponent from "../gy-page-component";

import "./about-page.css"
import GyPageContainer from "../../components/page-container/gy-page-container";
import PropContainer from "../../components/container/prop-attachment/prop-container";
import {Link} from "react-router-dom";

export default class AboutPage extends GyPageComponent
{
    _render() {
        return (
            <GyPageContainer>
                <PropContainer>
                    <h1>About</h1>
                    <p>
                        gyskate is a content-driven platform featuring skateboarding in the Grimsby and Cleethorpes
                        area.
                    </p>
                    <h1>What to expect</h1>
                    <p>
                        <ul>
                            <li>Pictures and videos of all different types of skaters</li>
                            <li> Posts and updates on the latest events surrounding Grimsby and Cleethorpes.</li>
                        </ul>
                    </p>
                    <h1>Community</h1>
                    <p>
                        The design goal for this website means it isn't possible to regulate and control this website
                        and that it's only purely what the community wants and asks for.
                    </p>
                    <h1>Contact</h1>
                    <p>
                        Please <Link to={"contact"}>contact me</Link> if you have an idea for this project and you would
                        like to see some changes with this website and I will be sure to take your opinion across.
                    </p>
                </PropContainer>
            </GyPageContainer>
        )
    }
}
import React from 'react'

import "./gy-page-component.css"
import FooterPage from "./components/footer/footer-page";

/**
 * @abstract
 */
export default class GyPageComponent extends React.Component
{
    render() {
        return (
            <div>
                {this._render()}
                <FooterPage/>
            </div>
        )
    }

    /**
     * @abstract
     */
    _render()
    {
        throw new Error("Method '_render()' must be implemented.")
    }
}
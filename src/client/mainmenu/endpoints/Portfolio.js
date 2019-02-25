import React from 'react'
import 'scss/main.scss'

const Portfolio = () => (
    <>
        <h1 className="headline">Portfolio</h1>
        <h1 className="subheadline">Enterprise Applications</h1>
        <ul>
            <li className="list">
                <a href="https://erp.appreciateco.com">
                    Appreciate Enterprise Accounting
                </a>
            </li>
            <li className="list">
                <a href="">Integrated Payment Processing</a>
            </li>
            <li className="list">
                <a href="">Enterprise File Server</a>
            </li>
        </ul>
        <h1 className="subheadline">Open Source Applications</h1>
        <ul>
            <li className="list">
                <a href="https://hash.appco.tech">
                    Hash Check Strong Password Generator.{' '}
                </a>
                <a href="">GitHub</a>
            </li>
            <li className="list">Blog Site</li>
            <li className="list">Blog Administration Utility</li>
        </ul>
        <h1 className="subheadline">NPM Modules</h1>
        <ul>
            <li className="list">
                <a href="https://hash.appco.tech">
                    ReactForm-Appco: a powerful, flexible forms and inputs
                    module for React.{' '}
                </a>
                <a href="">GitHub</a>
            </li>
            <li className="list">
                Form Validation module. From ReactForm-AppCo, but extracted for
                use on ordinary forms.{' '}
            </li>
            <a href="">GitHub</a>
            <li className="list">LightBox: a "popup" menu module. </li>
            <a href="">GitHub</a>
        </ul>
    </>
)

export default Portfolio

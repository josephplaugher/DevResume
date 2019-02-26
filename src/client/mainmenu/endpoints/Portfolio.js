import React from 'react'
import 'scss/main.scss'

const Portfolio = () => (
    <>
        <h1 className="headline">Portfolio</h1>
        <h1 className="subheadline">Enterprise Applications</h1>
        <ul>
            <li className="list">
                <p>
                    <a href="https://erp.appreciateco.com">
                        Appreciate Enterprise Accounting
                    </a>
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="">Integrated Payment Processing</a>
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="">Enterprise File Server</a>
                </p>
            </li>
        </ul>
        <h1 className="subheadline">Open Source Applications</h1>
        <ul>
            <li className="list">
                <p>
                    <a href="https://hash.appco.tech">
                        Hash Check Strong Password Generator.{' '}
                    </a>
                    <a href="">GitHub</a>
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="">Blog Site. </a>
                    <a href="">GitHub</a>
                </p>
            </li>

            <p>
                <li className="list">
                    <a href="">Blog Administration Utility. </a>
                    <a href="">GitHub</a>
                </li>
            </p>
            <p>
                <li className="list">
                    <a href="">Pantry. </a>
                    <a href="">GitHub</a>
                </li>
            </p>
        </ul>
        <h1 className="subheadline">NPM Modules</h1>
        <ul>
            <li className="list">
                <p>
                    <a href="https://hash.appco.tech">
                        ReactForm-Appco: a powerful, flexible forms and inputs
                        module for React.{' '}
                    </a>

                    <a href="">GitHub</a>
                </p>
            </li>
            <li className="list">
                <p>
                    Form Validation module. From ReactForm-AppCo, but extracted
                    for use on ordinary forms. <a href="">GitHub</a>{' '}
                </p>
            </li>
            <li className="list">
                <p>
                    <a href="https://hash.appco.tech">
                        LightBox: a "popup" menu module.{' '}
                    </a>
                    <a href="">GitHub</a>
                </p>
            </li>
        </ul>
    </>
)

export default Portfolio

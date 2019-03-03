import React from 'react'
import 'scss/main.scss'

const Skills = () => (
    <>
        <h1 className="headline">Technologies I Know</h1>
        <p className="text">
            Here are the technologies in the web development ecosystem I know
            and use every day.
        </p>
        <ul>
            <li className="list">
                <p>
                    Vanilla JavaScript - for simple applications that run in the
                    browser, typically with only one view. Also useful for
                    adding interactivity to static HTML websites generated on
                    the server.
                </p>
                <p>
                    This can take a couple different shapes: several event
                    handlers for directly interacting with the DOM in one or two
                    JavaScript files or multiple JavaScript modules using
                    import/export and bundled with Webpack into a single file.
                </p>
            </li>
            <li className="list">
                <p>
                    React - for dynamic, interactive, userfriendly applications
                    that run in the browser.
                </p>
            </li>
            <li className="list">
                <p>
                    Isomorphic/Universal React - for the best of both worlds
                    from the first two items above: the ability to render the
                    entire view on the server so it is SEO friendly and still
                    maintains complete interactivity.
                </p>
            </li>
            <li className="list">
                <p>
                    Node with Express - from simple to complex server side
                    business logic, or a straight-forwad CRUD server.
                </p>
                <p>
                    I am experienced with old-school JavaScript including
                    building functional "classes" using prototypical inheritance
                    and using require/module.exports to combine JavaScript
                    files.
                </p>
            </li>
            <li className="list">
                <p>Electron - for building desktop applications.</p>
            </li>
            <li className="list">
                <p>GIT - for version control.</p>
            </li>
            <li className="list">
                <p>
                    Webpack - for bundling JavaScript modules, and other assets
                    such as images and css, into one file to be loaded onto the
                    HTML page in the browser
                </p>
            </li>
        </ul>
    </>
)

export default Skills

import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Nav from './mainmenu/Nav'
import Routes from './Routes'
import profilepicture from './images/profile-picture-vertical.png'
import reactlogo from './images/reactlogo.png'
import nodelogo from './images/nodelogo.png'
import webpacklogo from './images/webpacklogo.png'
import npmlogo from './images/npmlogo.png'
// import linkedinlogo from './images/linkedinlogo.png'
import 'scss/main.scss'
import 'scss/logo.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="container">
                <h1> change your host file when you get it working</h1>
                <div id="headshot" className="profile-grid">
                    <img src={profilepicture} alt="profile image" />
                </div>

                <EB comp="Nave in App.js">
                    <div className="nav-container">
                        <Nav />
                    </div>
                </EB>
                <EB comp="Router in App.js">
                    <div className="content">
                        {Routes.map(
                            ({ path, exact, component: C, ...rest }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    exact={exact}
                                    render={props => <C {...props} {...rest} />}
                                />
                            )
                        )}
                    </div>
                </EB>
                <div className="image-grid">
                    <img src={reactlogo} alt="react logo" />
                    <img src={nodelogo} alt="node logo" />
                    <img src={webpacklogo} alt="webpack logo" />

                    <img src={npmlogo} alt="npm logo" />
                </div>
            </div>
        )
    }
}

export default App

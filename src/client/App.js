import React from 'react'
import { Route } from 'react-router-dom'
import EB from 'Util/EB'
import Nav from './mainmenu/Nav'
import Routes from './Routes'
import profilepicture from './profile-picture-vertical.png'
import reactlogo from './reactlogo.png'
import nodelogo from './nodelogo.png'
import 'scss/logo.scss'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div id="container">
                <div className="grid-header">
                    <img src={profilepicture} alt="profile image" />
                </div>

                <EB comp="Nave in App.js">
                    <div className="nav" id="nav-container">
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
                    <img src={reactlogo} alt="react Logo" />
                    <img src={nodelogo} alt="node Logo" />
                </div>
            </div>
        )
    }
}

export default App

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import express from 'express'
import { StaticRouter, matchPath } from 'react-router-dom'
import SetUrl from 'ServerUtil/SetUrl'
import App from './client/App'

export default function() {
    const app = express()

    app.use(express.static('public'))
    app.set('view engine', 'ejs')
    app.set('views', './src/views')

    let port = process.env.PORT
    app.listen(port, function() {
        console.log(
            'server started in ' +
                process.env.NODE_ENV +
                ' mode on port ' +
                port
        )
    })

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', SetUrl())
        res.header(
            'Access-Control-Allow-Methods',
            'GET,PUT,POST,DELETE,OPTIONS'
        )
        res.header(
            'Access-Control-Allow-Headers',
            'Content-Type, authorization'
        )
        next()
    })

    app.get('*', (req, res, next) => {
        const AppString = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={{ data: 'context' }}>
                <App />
            </StaticRouter>
        )
        res.render('index', { App: AppString })
    })
}

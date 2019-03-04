import Summary from './mainmenu/endpoints/Summary'
import WorkExp from './mainmenu/endpoints/WorkExp'
import Skills from './mainmenu/endpoints/Skills'
import ContactMe from './mainmenu/endpoints/ContactMe'
import Portfolio from './mainmenu/endpoints/Portfolio'

const Routes = [
    {
        path: '/', //this is the url and the link button path
        exact: true,
        component: Summary,
        name: 'Home', //this is the link label
    },
    {
        path: '/workexp',
        component: WorkExp,
        name: 'Work Experience & Education',
    },
    {
        path: '/skills',
        component: Skills,
        name: 'Skills',
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'Portfolio',
    },
    {
        path: '/contact',
        component: ContactMe,
        name: 'Contact Me',
    },
]

export default Routes

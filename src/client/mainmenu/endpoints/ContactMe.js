import React from 'react'
import 'scss/main.scss'

const ContactMe = () => (
    <>
        <h1 className="headline">Think you might want to hire me?</h1>
        <p className="text">You can get in touch with me by:</p>
        <p className="text">
            Emailing{' '}
            <a
                href="mailto:josephplaugher@gmail.com"
                style={{ textDecoration: 'underline' }}
            >
                josephplaugher@gmail.com
            </a>
        </p>
        <p className="text">Calling 971-373-1740</p>
        <p className="text">
            Leaving me a message on{' '}
            <a
                href="https://www.linkedin.com/in/joseph-plaugher-911b497/"
                style={{ textDecoration: 'underline' }}
            >
                Linked In
            </a>
        </p>
    </>
)

export default ContactMe

import React from 'react';

import './Footer.css'

function Footer({ children }) {
    return (
        <nav id="footerHide" class="navbar navbar-expand-lg bg-danger" sticky="bottom">
            <p class="col text-center">Copyright</p>
        </nav>

    )
}

export default Footer
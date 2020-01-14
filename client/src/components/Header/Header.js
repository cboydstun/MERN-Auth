import React from 'react';

import './Header.css'

// This contains the header bar seen at the top of the page.
function Header() {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <a class="navbar-brand" id="headerTitle" href="/">Chris Boydstun: Full Stack Web Developer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" id="navItems" href="/">Bio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/Skills">Skills</a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/Projects">Projects</a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/Users">CRUD</a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/Articles">CRUD w/context</a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/register">Register</a>
                    </li>
                    <li class="nav-item col text-center">
                        <a class="nav-link col text-center" id="navItems" href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
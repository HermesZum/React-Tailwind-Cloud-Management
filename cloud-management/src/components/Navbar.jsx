// Importing the React library and the useState hook from the React library.
import React, {useState} from 'react';
// Importing the MenuIcon and XIcon from the heroicons/react/outline package.
import {MenuIcon, XIcon} from "@heroicons/react/outline";

// This is a Navbar component.
const Navbar = () => {
    // A React hook that is used to set the state of the component.
    const [open, display] = useState(false);
    // If the nav is open, close it. If the nav is closed, open it.
    const toggleNav = () => display( !open );
    return (
        <header>
            {/**
              * This is the navbar. It contains the brand, the navbar, the buttons, and the menu icon.
            **/}
            <nav>
                {/**
                  * Creating a div that contains the brand name.
                **/}
                <div className={'brand'}>
                    <h1><a href="/">CLOUD.</a></h1>
                </div>
                {/**
                  * Creating a list of links that are displayed on the navbar.
                **/}
                <div className={'navbar'}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/platforms">Platforms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </div>
                {/**
                  * Creating two buttons, one for logging in and one for creating an account.
                **/}
                <div className={'navbar'}>
                    <button>Login</button>
                    <button>Account</button>
                </div>
                {/**
                  * Creating a div that contains a menu icon.
                  * When the user clicks on the menu icon, the navbar is displayed.
                **/}
                <div className={'menuIcon'} onClick={toggleNav}>
                    {!open ? <MenuIcon/> : <XIcon />}
                </div>
            </nav>
            {/**
              * This is the mobile navbar.
              * It is hidden by default, but when the user clicks on the menu icon, it is displayed.
            **/}
            <div className={!open ? 'hidden' : 'mobile'}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/platforms">Platforms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                {/**
                  *Creating two buttons, one for logging in and one for creating an account.
                **/}
                <div className={'mobileButtons'}>
                    <button>Login</button>
                    <button>Account</button>
                </div>
            </div>
        </header>
    );
};

// Exporting the Navbar component so that it can be imported into other files.
export default Navbar;

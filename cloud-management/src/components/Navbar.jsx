// Importing the React library and the useState hook from the React library.
import React, { useState } from 'react';
/* Importing the Link and animateScroll as scroll from the react-scroll package. */
import { Link } from 'react-scroll'
// Importing the MenuIcon and XIcon from the heroicons/react/outline package.
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// This is a Navbar component.
const Navbar = () => {
    // A React hook that is used to set the state of the component.
    const [ open, display ] = useState( false );
    // If the nav is open, close it. If the nav is closed, open it.
    const toggleNav = () => display( !open );
    // It closes the modal.
    const handleClose = () => display( !open );
    return (
        <header>
            {/**
             * This is the navbar. It contains the brand, the navbar, the buttons, and the menu icon.
             **/ }
            <nav>
                {/**
                 * Creating a div that contains the brand name.
                 **/ }
                <div className={ 'brand' }>
                    <h1><Link to="home" smooth={ true } offset={ 0 } duration={ 500 }>CLOUD.</Link></h1>
                </div>
                {/**
                 * Creating a list of links that are displayed on the navbar.
                 **/ }
                <div className={ 'navbar' }>
                    <ul>
                        <li><Link to="about" smooth={ true } offset={ -150 } duration={ 500 }
                                  className={ 'navbarLink' }>About</Link></li>
                        <li><Link to="support" smooth={ true } offset={ -80 } duration={ 500 }
                                  className={ 'navbarLink' }>Support</Link></li>
                        <li><Link to="platforms" smooth={ true } offset={ -150 } duration={ 500 }
                                  className={ 'navbarLink' }>Platforms</Link></li>
                        <li><Link to="pricing" smooth={ true } offset={ -25 } duration={ 500 }
                                  className={ 'navbarLink' }>Pricing</Link></li>
                        <li><Link to="social" smooth={ true } offset={ -25 } duration={ 500 }
                                  className={ 'navbarLink' }>Social</Link></li>
                    </ul>
                </div>
                {/**
                 * Creating two buttons, one for logging in and one for creating an account.
                 **/ }
                <div className={ 'navbar' }>
                    <button>Login</button>
                    <button>Account</button>
                </div>
                {/**
                 * Creating a div that contains a menu icon.
                 * When the user clicks on the menu icon, the navbar is displayed.
                 **/ }
                <div className={ 'menuIcon' } onClick={ toggleNav }>
                    { !open ? <MenuIcon/> : <XIcon/> }
                </div>
            </nav>
            {/**
             * This is the mobile navbar.
             * It is hidden by default, but when the user clicks on the menu icon, it is displayed.
             **/ }
            <div className={ !open ? 'hidden' : 'mobile' }>
                <ul>
                    <li><Link onClick={ handleClose } to="about" smooth={ true } offset={ -100 } duration={ 500 }
                              className={ 'navbarLink' }>About</Link></li>
                    <li><Link onClick={ handleClose } to="support" smooth={ true } offset={ -80 } duration={ 500 }
                              className={ 'navbarLink' }>Support</Link></li>
                    <li><Link onClick={ handleClose } to="platforms" smooth={ true } offset={ -150 } duration={ 500 }
                              className={ 'navbarLink' }>Platforms</Link></li>
                    <li><Link onClick={ handleClose } to="pricing" smooth={ true } offset={ -25 } duration={ 500 }
                              className={ 'navbarLink' }>Pricing</Link></li>
                    <li><Link onClick={ handleClose } to="social" smooth={ true } offset={ -10 } duration={ 500 }
                              className={ 'navbarLink' }>Social</Link></li>
                </ul>
                {/**
                 *Creating two buttons, one for logging in and one for creating an account.
                 **/ }
                <div className={ 'mobileButtons' }>
                    <button>Login</button>
                    <button>Account</button>
                </div>
            </div>
        </header>
    );
};

// Exporting the Navbar component so that it can be imported into other files.
export default Navbar;

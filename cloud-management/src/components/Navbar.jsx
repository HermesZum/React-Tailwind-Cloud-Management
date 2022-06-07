import React, {useState} from 'react';
import {MenuIcon, XIcon} from "@heroicons/react/outline";

const Navbar = () => {
    const [open, display] = useState(false);
    const toggleNav = () => display( !open );
    return (
        <header>
            <nav>
                <div className={'brand'}>
                    <h1><a href="/">CLOUD.</a></h1>
                </div>
                <div className={'navbar'}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/platforms">Platforms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                </div>
                <div className={'navbar'}>
                    <button>Login</button>
                    <button>Account</button>
                </div>
                <div className={'menuIcon'} onClick={toggleNav}>
                    {!open ? <MenuIcon/> : <XIcon />}
                </div>
            </nav>
            <div className={!open ? 'hidden' : 'mobile'}>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/platforms">Platforms</a></li>
                        <li><a href="/pricing">Pricing</a></li>
                    </ul>
                <div className={'mobileButtons'}>
                    <button>Login</button>
                    <button>Account</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

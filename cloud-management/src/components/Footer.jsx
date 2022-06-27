/* This is importing the React library from the node_modules folder. */
import React from 'react';
/* Importing the icons from the react-icons package. */
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaGithub,
    FaCheck,
} from "react-icons/fa";

/**
 * It returns the Footer component.
 * @returns A footer with a container with 5 menus and a subscribed form.
 */
const Footer = () => {
    return (
        <footer>
            <div className={ 'footerContainer' }>

                <div className={ 'footerMenu' }>
                    <h6>Solutions</h6>
                    <ul>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Marketing</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Analytics</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Commerce</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Data</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Cloud</a></li>
                    </ul>
                </div>

                <div className={ 'footerMenu' }>
                    <h6>Support</h6>
                    <ul>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Pricing</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Documentation</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Guides</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Api</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Contact</a></li>
                    </ul>
                </div>

                <div className={ 'footerMenu' }>
                    <h6>Company</h6>
                    <ul>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>About</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Blog</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Jobs</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Press</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Partners</a></li>
                    </ul>
                </div>

                <div className={ 'footerMenu' }>
                    <h6>Legal</h6>
                    <ul>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Terms</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Privacy</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Policies</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Claims</a></li>
                        <li><a href="/"><FaCheck className={ 'footerMenuCheck' }/>Conditions</a></li>
                    </ul>
                </div>
                <div className={ 'footerSubscribe' }>
                    <h6>Subscribe to our newsletter</h6>
                    <p>The latest news sent to your inbox weekly.</p>
                    <form action={ '/' }>
                        <input type="email" placeholder="Enter your email"/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={ 'footerCopyright' }>
                <div>
                    <p>© 2020 <a href="/">3Gear</a>. All rights reserved.</p>
                </div>
                <div>
                    <ul className={ 'footerSocial' }>
                        <li><a href="/"><FaFacebook className={'footerSocialIcon'}/></a></li>
                        <li><a href="/"><FaTwitter className={'footerSocialIcon'}/></a></li>
                        <li><a href="/"><FaInstagram className={'footerSocialIcon'}/></a></li>
                        <li><a href="/"><FaYoutube className={'footerSocialIcon'}/></a></li>
                        <li><a href="/"><FaLinkedin className={'footerSocialIcon'}/></a></li>
                        <li><a href="/"><FaGithub className={'footerSocialIcon'}/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
/* Exporting the Footer component to be used in other files. */
export default Footer;

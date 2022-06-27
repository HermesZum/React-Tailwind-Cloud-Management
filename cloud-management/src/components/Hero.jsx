import React from 'react';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from "@heroicons/react/solid";

import cyberBg from '../assets/img/cyber-bg.png';

const Hero = () => {
    return (
        <section name={'home'}  className={'heroSection'}>
            <div className={'heroContainer'}>
                <div className={'heroDetails'}>
                    <p className={'heroText'}>Unique Sequencing & Production</p>
                    <h1 className={'heroTitle'}>Cloud Management</h1>
                    <p className={'heroText'}>This is our Tech brand.</p>
                    <button className={'heroButton'}>Get Started</button>
                </div>
                <div className={'heroImage'}>
                    <img src={cyberBg} alt="cyber-bg" />
                </div>
                <div className={'heroServices'}>
                    <h3>Data Services</h3>
                    <div className={'heroServicesItems'}>
                        <p><CloudUploadIcon className={'icon'}/>App Security</p>
                        <p><DatabaseIcon className={'icon'}/>Dashboard Design</p>
                        <p><PaperAirplaneIcon className={'icon'}/>Cloud Data</p>
                        <p><ServerIcon className={'icon'}/>API</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

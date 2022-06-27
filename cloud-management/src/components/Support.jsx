/* Importing the React library from the node_modules folder. */
import React from 'react';
/* Importing the PhoneIcon and ArrowSmRightIcon from the @heroicons/react/outline folder. */
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
/* Importing the ChipIcon and SupportIcon from the @heroicons/react/solid folder. */
import { ChipIcon, SupportIcon } from '@heroicons/react/solid';
/* Importing the support.jpg image from the assets/img folder. */
import support from '../assets/img/support.jpg';
/* A function that returns the Support component. */
const Support = () => {
    return (
        <section name={'support'} className={'supportContainer'}>
            <div className={'supportImageCover'}>
                <img className={'supportImage'} src={ support } alt={ 'support' }/>
            </div>
            <div className={'supportBodyContainer'}>
                <div className={'supportBody'}>
                    <h2>Support</h2>
                    <h3>Finding the right team</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Amet aperiam beatae cupiditate deleniti earum, et laborum magnam molestias nam nemo
                        perspiciatis qui, repudiandae, rerum saepe tenetur. Minima nobis omnis quis?
                    </p>
                </div>
                <div className={'supportCards'}>
                    <div className={'supportCard'}>
                        <div className={'supportCardBody'}>
                            <PhoneIcon className={'supportCardIcon'}/>
                            <h3>Sales</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={'supportCardLink'}>
                            <a href="/">
                                Contact Us <ArrowSmRightIcon className={'supportCardLinkIcon'}/>
                            </a>
                        </div>
                    </div>
                    <div className={'supportCard'}>
                        <div className={'supportCardBody'}>
                            <SupportIcon className={'supportCardIcon'}/>
                            <h3>Technical Support</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={'supportCardLink'}>
                            <a href="/">
                                Contact Us <ArrowSmRightIcon className={'supportCardLinkIcon'}/>
                            </a>
                        </div>
                    </div>
                    <div className={'supportCard'}>
                        <div className={'supportCardBody'}>
                            <ChipIcon className={'supportCardIcon'}/>
                            <h3>Media Inquiries</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={'supportCardLink'}>
                            <a href="/">
                                Contact Us <ArrowSmRightIcon className={'supportCardLinkIcon'}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
/* Exporting the Support component. */
export default Support;

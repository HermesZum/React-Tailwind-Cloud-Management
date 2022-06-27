/* Importing the React library from the node_modules folder. */
import React from 'react';
/* Importing the CheckIcon from the heroicons package. */
import { CheckIcon } from "@heroicons/react/solid";
/* A function that returns the Pricing component. */
const Pricing = () => {
    return (
        <section name={'pricing'} className={ 'pricingSection' }>
            <div className={ 'pricingAbsolute' }></div>

            <div className={ 'pricingContainer' }>

                <div className={ 'pricingHeader' }>
                    <h2>
                        Pricing
                    </h2>
                    <h3>The right price for your research.</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda autem eveniet
                        explicabo illo labore laboriosam quaerat quas reiciendis voluptates?
                    </p>
                </div>

                <div className={ 'pricingCards' }>

                    <div className={ 'pricingCard' }>
                        <h4>
                            Standard
                        </h4>
                        <div>
                            <p className={ 'pricingCardAmount' }>
                                €49
                                <span>
                                    /mo
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className={ 'pricingCardSubtitle' }>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className={ 'pricingCardBody' }>
                                <div className={ 'pricingCardChecks' }>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <button>
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={ 'pricingCard' }>
                        <h4>
                            Premium
                        </h4>
                        <div>
                            <p className={ 'pricingCardAmount' }>
                                €99
                                <span>
                                    /mo
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className={ 'pricingCardSubtitle' }>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <div className={ 'pricingCardBody' }>
                                <div className={ 'pricingCardChecks' }>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor.
                                    </p>
                                    <p>
                                        <CheckIcon className={ 'pricingCardIcon' }/>
                                        Lorem ipsum dolor sit amet.
                                    </p>
                                </div>
                                <button>
                                    Get started
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};
/* Exporting the component to be used in other files. */
export default Pricing;

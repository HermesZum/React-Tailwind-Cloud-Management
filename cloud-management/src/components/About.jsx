import React from 'react';

const About = () => {
    return (
        <section name={'about'} className={'aboutSection'}>
            <div className={'aboutContainer'}>
                <div className={'aboutBody'}>
                    <h2>Trusted by developers across the world</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium adipisci aliquid aperiam aspernatur assumenda deserunt distinctio est eveniet excepturi
                        facere, illo impedit nihil odit provident quis suscipit, tempore veritatis voluptate!
                    </p>
                </div>
                <div className={'aboutCards'}>
                    <div className={'aboutCard'}>
                        <h4>100%</h4>
                        <p>Completion</p>
                    </div>
                    <div className={'aboutCard'}>
                        <h4>24/7</h4>
                        <p>Delivery</p>
                    </div>
                    <div className={'aboutCard'}>
                        <h4>100K</h4>
                        <p>Transactions</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

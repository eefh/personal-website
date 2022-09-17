import React from 'react';
import Welcome from './Welcome';
import Skills from './Skills';
import Quote from './Quote';
import Portfolio from './Portfolio';
import About from './About';

const PageContent = () => {
    return (
        <div class='PageContent'>
            <Skills/>
            <Quote/>
            <Portfolio/>
            <About/>
        </div>
    );
}

export default PageContent;
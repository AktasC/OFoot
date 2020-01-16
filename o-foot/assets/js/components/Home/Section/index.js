import React from 'react';
import PropTypes from 'prop-types';

// Import scss
import './section.scss';


const Section = (func) => {
    console.log(func)
    return (

    <div id="section">
        <h2 className="section-title">{func.title}</h2>
        <p className="section-content">{func.content}</p>
    </div>

    )
 
};

export default Section;

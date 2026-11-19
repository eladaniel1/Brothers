import React from 'react';
import { Link } from 'react-router-dom';

const GetEstimateCTA = ({ heading = 'Ready to get started?', text, className = '' }) => (
    <div className={`aside-card ${className}`}>
        <h3>{heading}</h3>
        {text ? <p>{text}</p> : null}
        <Link className="btn btn-primary" to="/contact/">Get an Estimate</Link>
    </div>
);

export default GetEstimateCTA;

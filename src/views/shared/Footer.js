import React, { useState } from 'react';

function Footer(props) {


    /*if (props.addClick === 'true') {
        setSessionCounter(sessionCounter + 1);
    }*/

    return (
        <div className="bg-light text-center fixed-bottom p-3">
            <p>&copy; 2023 | COMP2112 | First React App</p>
            <p>Total Session Clicks: <span id="sessionCounter">{props.sessionCounter}</span></p>
        </div>
    );
}

export default Footer;
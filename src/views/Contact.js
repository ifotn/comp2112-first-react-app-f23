import React, { useState, useEffect } from "react";

function Contact() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    // use State hook to track the current value of the user's message
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState(null);

    // create new state var for errorMessage, initialized to empty
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (event) => {
        setMessage(event.target.value)
        // if input has a value, remove any error message displayed
        if (message === '') {
            setErrorMessage('Message is required');
        }
        else {
            setErrorMessage(null);
        }
    }

    const showMessageAlert = () => {
        if (message === '') {
            setErrorMessage('Message is required');
        }
        else {
            alert(message);
        }       
    }

    return (
        <section className="container">
            <h1>Contact Us</h1>
            <p>tel: 705.728.1968</p>
            <textarea placeholder="Send us a message" onChange={handleChange}></textarea>
            <div id="errorMessage" className="text-danger">{errorMessage}</div>
            <div className="form-group">
                <button className="btn btn-info" onClick={showMessageAlert}>Submit</button>
            </div>
            <p>Your message is: {message}</p>
        </section>
    );
}

export default Contact;
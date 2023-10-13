import React, { useEffect } from "react";

function About() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'About';
    }, []);

    return (
        <section className="container">
            <h1>About this Site</h1>
            <p>We're using it to learn React.</p>
        </section>
    );
}

export default About;
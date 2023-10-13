import React, { useEffect } from "react";

function Services() {
    // set page title w/Effect Hook
    useEffect(() => {
        document.title = 'Services';
    }, []);

    // define a list of services (normally from db or api)
    let services = ["Web Design", "Programming", "Logo Design", "SEO"];

    return (
        <section className="container">
            <h1>Services</h1>
            <p>We can do a bunch of stuff including:</p>
            <ul className="list-group">
                {/* use array.map to loop through, creating a list item for each array element. shorter code than a for loop */}
                {services.map((service) => (
                    <li className="list-group-item" key={service}>
                        <i className="bi bi-tools"></i> {service}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;
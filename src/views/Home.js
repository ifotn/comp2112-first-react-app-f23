import React, { useState } from "react";

// add User prop to this page; a user should be passed any time this loads
function Home(User) {
    /* set up the useState hook to main a count variable
    count: is our variable tracking the # of button clicks
    setCount: the method used to update the count variable
    0: the default value of the count variable
    */
    const [count, setCount] = useState(0);

    // increments counter
    const updateCount = () => {
        setCount(count + 1);
    }

    // resets counter to zero
    const resetCount = () => {
        setCount(0);
    }

    return (
        <section className="container">
            <h1>Welcome to our First React App, {User.displayName}</h1>
            <p>We're building this for COMP2112.</p>
            <p>Your username is {User.username}.</p>
            <div>
                <h5>Count: <span className="badge bg-secondary">{count}</span></h5>
                <button className="btn btn-info m-1" onClick={updateCount}>Click Me</button>
                <button className="btn btn-info m-1" onClick={resetCount}>Reset</button>
            </div>
        </section>
    );
}

export default Home;
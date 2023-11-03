// reference global context to access global var
import { useContext } from "react";
import { CounterContext } from "../../App";

function Footer() {
    // ref to global var
    const { sessionCounter } = useContext(CounterContext);

    return (
        <div className="bg-light text-center fixed-bottom p-3">
            <p>&copy; 2023 | COMP2112 | First React App</p>
            <p>Total Session Clicks: <span id="sessionCounter">{sessionCounter}</span></p>
        </div>
    );
}

export default Footer;
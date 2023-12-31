// shared components
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";

// page components
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";
import Blog from "./views/Blog";
import Post from "./views/Post";
import CreatePost from "./views/CreatePost";
import Login from "./views/Login";
import Logout from "./views/Logout";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react"; // for sharing state between components

// global Context (like a global or session var container)
export const CounterContext = createContext();

// get username from session storage if there is one
// ternary operator: if {condition is true} ? someValue : someOtherValue 
let username = sessionStorage.getItem('username') ? sessionStorage.getItem('username') : '';

/* above is equivalent to:
if (sessionStorage.getItem('username) != null) {
   username = sessionStorage.getItem('username')
}
else {
  username = '';
} */

function App() {
  // set state variable for a session click count
  const [sessionCounter, setSessionCounter] = useState(0);

  // public function to increment the session var; available to any child component
  const handleIncrement = () => setSessionCounter(sessionCounter + 1);  

  return (
    <div>
      {/* wrap all components in the context so it can be shared among all */}
      <CounterContext.Provider value={{ sessionCounter, handleIncrement }}>
        {/* jsx comment style */}
        <Header username={username} />
        <main>
          {/* use classes from react-router-dom to set up the url mapping for each page */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home username={username} displayName='Rich Freeman' />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/create-post" element={<CreatePost username={username} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </BrowserRouter>
        </main>
        <Footer />
      </CounterContext.Provider>
    </div>
  );
}

export default App;

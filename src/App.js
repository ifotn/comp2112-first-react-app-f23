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

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sessionCounter, setSessionCounter] = useState(0);

  return (
    <div>
      {/* jsx comment style */}
      <Header username='rfreeman' />
      <main>
        {/* use classes from react-router-dom to set up the url mapping for each page */}
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home username='rfreeman' displayName='Rich Freeman' />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
         </BrowserRouter>
      </main>
      <Footer sessionCounter={sessionCounter} />
    </div>
  );
}

export default App;

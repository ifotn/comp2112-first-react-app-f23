// shared components
import Header from "./views/shared/Header";
import Footer from "./views/shared/Footer";

// page components
import Home from "./views/Home";
import About from "./views/About";

// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* jsx comment style */}
      <Header />
      <main>
        {/* use classes from react-router-dom to set up the url mapping for each page */}
         <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
         </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;

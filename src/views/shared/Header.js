import React from "react";

// add User prop so we show some details about the user in the navbar
function Header(User) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          First React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/" id="home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about" id="about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact" id="contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services" id="services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog" id="blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#" id="profile">
                <i className="bi bi-person-circle"></i> {User.username}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// make public to the rest of the app
export default Header;

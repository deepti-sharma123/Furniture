import React from 'react';

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="footer">
          <div className="left-footer">
            <div className="newsletter">
              <h3>Subscribe to newsletter</h3>
              <input type="text" placeholder="Enter Your Name" />
              <input type="email" placeholder="Enter your Email" />
              <a href="#"><i className="fa-brands fa-telegram"></i></a>
            </div>
          </div>

          <div className="right-footer">
            <img
              src="https://themewagon.github.io/furni/images/sofa.png"
              alt="Sofa" />
          </div>
        </div>

        <div className="right-link">
          <div className="left-footer-text">
            <h2>Furni</h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
              Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>Knowledge base</li>
              <li>Live Chats</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Jobs</h4>
            <ul>
              <li>Our Team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Tables</h4>
            <ul>
              <li>Nordic chair</li>
              <li>Kruzo chair</li>
              <li>Ergonomic chair</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

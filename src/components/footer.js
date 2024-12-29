import React from "react";
import "./footer.css"; // Import additional CSS for custom styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-black text-white">
      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col-md-4 mb-4 first-sec">
            <h3>Prax Engineering Ltd</h3>
            <p>
              Unit 3 Enfield Court Nuffield Road
              <br />
              PE273NJ St Ives
              <br />
              United Kingdom
            </p>
            <p>Phone: 0044 79610087</p>
            <p>Landline: 0044 1480759133</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@praxengineering.net"
                className="text-white"
              >
                <span style={{ color: "#E6E6E3B3" }}>
                  contact@praxengineering.net
                </span>
              </a>
            </p>
          </div>

          {/* Second Column */}
          <div className="col-md-4 mb-4">
            <h3>Useful Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#machinery" className="text-white">
                  Machinery
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#careers" className="text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="col-md-4">
            <h3>Contact Form</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Jane Smith"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="jane@mail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  rows="3"
                  placeholder="your message..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-warning w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="social-links my-4">
          <h3 style={{color:"#E6E6E3"}}>Social Links</h3>
          <div className="text-start res-text">
          <a href="#facebook" className="text-warning mx-2">
  <img 
    src="Facebook.png" 
    alt="Facebook" 
    style={{ width: "30px", height: "30px", objectFit: "contain" }} 
  />
</a>
<a href="#twitter" className="text-warning mx-2">
  <img 
    src="Twitter.png" 
    alt="Twitter" 
    style={{ width: "30px", height: "30px", objectFit: "contain" }} 
  />
</a>
<a href="#instagram" className="text-warning mx-2">
  <img 
    src="Instagram.png" 
    alt="Instagram" 
    style={{ width: "30px", height: "30px", objectFit: "contain" }} 
  />
</a>
<a href="#linkedin" className="text-warning mx-2">
  <img 
    src="LinkedIn.png" 
    alt="LinkedIn" 
    style={{ width: "30px", height: "30px", objectFit: "contain" }} 
  />
</a>

          </div>
        </div>

        {/* Copyright */}
        <div className="full-width-divider"></div>
        <p className="text-center" style={{ paddingTop: "10px" }}>
          © 2024 Copyright{" "}
          <span style={{ color: "#EEC643" }}>Prax Engineering</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

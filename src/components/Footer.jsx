import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import "./Footer.css";

const socials = [
  {
    name: "Facebook",
    path: "M13 22v-8h3l1-4h-4V7.5c0-1.1.3-1.8 1.9-1.8H17V2.1C16.6 2 15.6 2 14.4 2 11.9 2 10 3.5 10 6.3V10H7v4h3v8h3z",
  },
  {
    name: "Instagram",
    path: "M12 2c-2.7 0-3.1 0-4.1.1-1.1.1-1.8.2-2.5.5-.7.3-1.3.6-1.8 1.2-.6.5-.9 1.1-1.2 1.8-.3.7-.4 1.4-.5 2.5C2 9.1 2 9.5 2 12.2s0 3.1.1 4.1c.1 1.1.2 1.8.5 2.5.3.7.6 1.3 1.2 1.8.5.6 1.1.9 1.8 1.2.7.3 1.4.4 2.5.5 1 .1 1.4.1 4.1.1s3.1 0 4.1-.1c1.1-.1 1.8-.2 2.5-.5.7-.3 1.3-.6 1.8-1.2.6-.5.9-1.1 1.2-1.8.3-.7.4-1.4.5-2.5.1-1 .1-1.4.1-4.1s0-3.1-.1-4.1c-.1-1.1-.2-1.8-.5-2.5-.3-.7-.6-1.3-1.2-1.8-.5-.6-1.1-.9-1.8-1.2-.7-.3-1.4-.4-2.5-.5C15.1 2 14.7 2 12 2zm0 5a5 5 0 110 10 5 5 0 010-10zm0 8.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z",
  },
  {
    name: "LinkedIn",
    path: "M6.9 8.4H3.6V21h3.3V8.4zM5.3 3c-1.1 0-1.9.8-1.9 1.9 0 1 .8 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9C7.2 3.8 6.4 3 5.3 3zM21 13.6c0-3.3-1.8-4.9-4.2-4.9-1.9 0-2.8 1.1-3.2 1.8V8.4H10.3c0 .1 0 12 0 12h3.3v-6.7c0-.4 0-.7.1-1 .3-.7.9-1.4 1.9-1.4 1.4 0 1.9 1 1.9 2.5V21H21v-7.4z",
  },
  {
    name: "YouTube",
    path: "M23 12s0-3.5-.4-5.2c-.3-.9-1-1.7-1.9-1.9C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.7.4c-.9.2-1.6 1-1.9 1.9C1 8.5 1 12 1 12s0 3.5.4 5.2c.3.9 1 1.6 1.9 1.9 1.8.4 8.7.4 8.7.4s6.9 0 8.7-.4c.9-.3 1.6-1 1.9-1.9.4-1.7.4-5.2.4-5.2zM9.8 15.5v-7l6 3.5-6 3.5z",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand-col">
          <div className="navbar__logo footer__logo">
            <span className="navbar__logo-mark">SE</span>
            <span className="navbar__logo-text">
              SHILP ENGINEERS 
              <small>ACADEMY</small>
            </span>
          </div>
          <p className="footer__desc">
            We teach, we train, we build careers — practical AutoCAD, STAAD Pro, Revit
            &amp; ETABS courses for civil engineers.
          </p>
          <div className="footer__social">
            {socials.map((s) => (
              <a href="#" key={s.name} aria-label={s.name}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#courses">Projects</a>
          <a href="#courses">Blog</a>
          <a href="#courses">Contact Us</a>
        
        </div>

        <div className="footer__col">
          <h4>Our Services</h4>
          <a href="#courses">STRUCTURAL DESIGNER</a>
          <a href="#courses">CONSULTANT ENGINEER </a>
          <a href="#courses">SUPERVISION WORKS</a>
          <a href="#courses">LAND SURVEYOR</a>
          <a href="#courses">INTERIOR DESIGNER </a>
           <a href="#courses">PLOTTING WORKS</a>
          <a href="#courses">LAND DEVELOPERS </a>
          <a href="#courses">ESTIMATES</a>
          <a href="#courses">N.A.PLANER</a>
          <a href="#courses">3D DESIGNER</a>
        </div>

        <div className="footer__col">
          <h4>Contact Info</h4>
          <span className="footer__contact-line">
            <MapPin size={15} /> OFFICE NO:433 WORD 3/A, VANDNA GARBICHOK,RAMBAG ROAD,ADIPUR
          </span>
          <span className="footer__contact-line">
            <Phone size={15} /> +91 99259 22320
          </span>
          <span className="footer__contact-line">
            <Mail size={15} /> shilp24115@gmail.com
          </span>
        </div>

     
      </div>

      <div className="footer__bottom">
        <span>© 2026  SHILP ENGINEERS  Academy. All Rights Reserved.</span>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}

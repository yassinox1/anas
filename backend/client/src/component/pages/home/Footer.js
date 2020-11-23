import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="http://dxc-technlogy-maroc.com/certif_tech">
              Nos Certifications & Technologies
            </Link>
            <Link to="http://dxc-technlogy-maroc.com/societes">
              Ils nous font Confiance
            </Link>
            <Link to="http://dxc-technlogy-maroc.com/careers">Carrières</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="http://dxc-technlogy-maroc.com/contact">
              Contactez-Nous
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="http://dxc-technlogy-maroc.com/presse/HPCDG_devient_DXC_Technology">
              HPCDG devient DXC Technology
            </Link>
            <Link to="http://dxc-technlogy-maroc.com/presse/Les_ambitions_de_DXC_Technology_Maroc">
              Les ambitions de DXC Technology Maroc, fleuron IT du Royaume
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>Address</h2>
            <Link to="/">DXC Technology Maroc</Link>
            <Link to="/">Bâtiment B9, Technopolis</Link>
            <Link to="/">11 100, Sala Al Jadida - Maroc</Link>
            <Link to="/">Tel : +212 5 30 57 64 00</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              DXC.TECHNOLOGY
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">2020 © DXC.TECHNOLOGY Morocco.</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

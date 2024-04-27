import "./Footer.css";
import "boxicons";
import logo from "../../assets/logo2.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-about">
        <img src={logo} alt="" />
        <p>
          Our mission is to provide the best handyman services near you at an
          reasonable price without sacrificing quality.
        </p>
      </div>
      <div className="links">
        <div className="links-title">
        <span ></span>
        <h3>Quick Links</h3>
        </div>
        <Link>Home</Link>
        <Link>Electrician</Link>
        <Link>Plumber</Link>
        <Link>Painter</Link>
        <Link>Builder</Link>
      </div>
      <div className="socials">
        <div className="links-title">
        <span></span>
        <h3>Follow Us</h3>
      </div>
      <a href="#"><box-icon name='facebook-square' type='logo' color='#00203a' size='md'></box-icon></a>
        <a href="#"><box-icon name='instagram-alt' type='logo' color='#00203a' size='md'></box-icon></a>
        <a href="#"><box-icon name='whatsapp-square' type='logo' color='#00203a' size='md'></box-icon></a>
        <a href="#"><box-icon name='pinterest' type='logo' color='#00203a' size='md'></box-icon></a>
        </div>
    </footer>
  );
};

export default Footer;

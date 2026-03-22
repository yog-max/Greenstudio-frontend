import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Footer({ isLoggedIn }) {

  const year = new Date().getFullYear();
   const navigate = useNavigate();

  return (
    <footer className="footer">
      
      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-section">
          <img id="gs321" src="/Assests/Images/Studio_logo.png" /><br/>
          <p>
            Capturing beautiful moments with creativity and passion.
            Book your events with Green Studio and make memories
            unforgettable.
          </p>
        </div>


        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Recentphotoshot">Gallery</a></li>
            <button className="booking-btn"
             onClick={() => {
                               if(!isLoggedIn){
                              toast.warning("Please register to access the booking page.");
                              setTimeout(() => {
                               navigate("/Register");
                              }, 1500);
                             }
                             else{
                              navigate("/Booking");
                             }
                           }}
            >Book Event</button>
            <li><a href="/about">About</a></li>
          </ul>
        </div>


        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Guntur, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ greenstudio@email.com</p>
        </div>


        {/* Social Media */}
        <div className="footer-section">
          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaYoutube /></a>

          </div>
        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {year} Green Studio | All Rights Reserved</p>
      </div>

    </footer>
  );
}

export default Footer;
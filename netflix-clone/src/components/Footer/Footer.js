import React from "react";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Footer/footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlined />
          <Instagram />
          <Twitter />
          <YouTubeIcon />
        </div>

        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notice</li>
              <li>Do not sell or share my information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shops</li>
              <li>Cookie preferences</li>
              <li>Ad Choice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
        </div>

        <div className="footer_service_code">
          <p>Service Code</p>
          <input
            type="text"
            className="service_code_input"
            placeholder="Enter code"
            maxlength="4"
          />
        </div>
        <div className="footer_copy_right">
          <p>&copy; 1997-2024, Netflix Inc.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

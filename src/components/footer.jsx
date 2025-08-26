import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div style={{ height: "120px" }} className="footer">
        <footer>
          <div class="footer">
            <div class="row">
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-instagram"></i></a>
              <a href="#"><i class="fa fa-youtube"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
            </div>

            <div class="row">
              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>

            <div class="row">
              INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Footer;

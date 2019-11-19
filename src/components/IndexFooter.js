import React from "react";
import Link from "next/link";

import { IndexNavImg, socailmedia } from "../libs/images";

function IndexFooter() {
  return (
    <footer className="footer-main">
      <div className="container">
        <div className="row pt-5">
          <div className="col-lg-3 col-sm-12 col-xs-12 footer-main__logodiv">
            <img src={IndexNavImg.flixmatesLogo} width="70px" alt="logo" />
            <h3>
              World's Largest Professional Network for Artists, Backstage &
              Services
            </h3>
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12 footer-main__tabs pb-3">
            <div className="row">
              <div className="col-md-3 col-sm-12 col-xs-12 pb-3">
                <h3>For Service Providers</h3>
                <p>Recruiter Console</p>
                <p>Association Services</p>
                <p>Post jobs</p>
                <p>Post Your Event</p>
                <p>Plan Your Event</p>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 pb-3">
                <h3>For individuals</h3>
                <p>Home</p>
                <p>MOOD Board</p>
                <p>Explore jobs</p>
                <p>Hit or Miss</p>
                <p>Post Your Story</p>
                <p>Download our app</p>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 pb-3">
                <h3>About</h3>
                <p>
                  <Link href="/about">
                    <a>About us</a>
                  </Link>
                </p>
                <p>
                  <Link href="/terms">
                    <a>Terms and Conditions</a>
                  </Link>
                </p>
                <p>Privacy Policy</p>
                <p>FAQs</p>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12 pb-3">
                <h3>Contact Us</h3>
                <p>+91 9869026035</p>
                <p>+91 9967136748</p>
                <p>+91 9987399929</p>
                <p>contact@flixmates.com</p>
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
          <div
            className="col-12 pt-3 pb-5"
            style={{ borderTop: "1px solid #605c63" }}
          >
            <div className="row footer-main__socialmedia">
              <div className="col-md-6 col-sm-12 col-xs-12 footer-main__socialmedia1">
                <img
                  src={socailmedia.facebooklogo}
                  className="mr-3"
                  width="20"
                  alt="facebook"
                />
                <img
                  src={socailmedia.instagramlogo}
                  className="mr-3"
                  width="20"
                  alt="instagram"
                />
                <img
                  src={socailmedia.twitterlogo}
                  className="mr-3"
                  width="20"
                  alt="twitter"
                />
                <img
                  src={socailmedia.linkedinlogo}
                  className="mr-3"
                  width="20"
                  alt="linkedin"
                />
                <img
                  src={socailmedia.youtubelogo}
                  className="mr-3"
                  width="20"
                  alt="youtube"
                />
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 footer-main__socialmedia2">
                Copyright © Flixmates - 2019 All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default IndexFooter;

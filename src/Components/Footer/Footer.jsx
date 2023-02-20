import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  const fb = () => {
    window.open("https://www.facebook.com");
  };
  const insta = () => {
    window.open("https://www.instagram.com/_kushwaha_shashank_");
  };
  const mail = () => {
    window.open("mailto:kushwahaabhi101@gmail.com");
  };
  const tweet = () => {
    window.open("https://twitter.com");
  };
  return (
    <>
      <footer id="footer">
        <BsTwitter
          id="twitter"
          data-tooltip-content="Connect with me on Twitter"
          className="fa"
          onClick={tweet}
        />
        <FaFacebookF
          id="facebook"
          data-tooltip-content="Connect with me on Facebook"
          className="fa"
          onClick={fb}
        />
        <FaInstagram
          id="instagram"
          data-tooltip-content="Follow me on Instagram"
          className="fa"
          onClick={insta}
        />
        <SiGmail
          id="mail"
          data-tooltip-content="Send me a mail"
          className="fa"
          onClick={mail}
        />
        <FaYoutube
          id="youtube"
          data-tooltip-content="Follow me on Youtube"
          className="fa"
        />
        <Tooltip
          anchorId="twitter"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="facebook"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="instagram"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="youtube"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
        <Tooltip
          anchorId="mail"
          style={{
            maxWidth: "10rem",
            textAlign: "center",
          }}
          variant="dark"
        />
      </footer>
    </>
  );
}

export default Footer;

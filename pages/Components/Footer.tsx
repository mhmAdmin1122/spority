import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-innerBox footer-links-liveChannels">
        <h3>Live Channels</h3>
        <div className="Footer-channel-links-box">
          <Link href="/">PTV Sport</Link>
          <Link href="/">SKY Sport</Link>
          <Link href="/">SKY SportMix</Link>
          <Link href="/">A Sport HD</Link>
          <Link href="/">More Channels</Link>
        </div>
      </div>

      <div className="footer-innerBox footer-links-followUs">
        <h3>Follow Us</h3>
        <div className="Footer-follow-links-box">
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter / {"(X)"}</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">TikTok</Link>
        </div>
      </div>

      <div className="footer-innerBox footer-links-help">
        <h3>Help</h3>
        <div className="Footer-help-links-box">
          <Link href="/">Contact Service</Link>
          <Link href="/">Create a Meeting</Link>
          <Link href="/">Describe Problem</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">FeedBack</Link>
        </div>
      </div>

      <div className="footer-innerBox footer-links-aboutUS">
        <h3>About Us</h3>
        <div className="Footer-help-links-box">
          <Link href="/">Who we are?</Link>
          <Link href="/">Our Mission</Link>
          <Link href="/">Our Team</Link>
          <Link href="/Privacy-Policy">Privacy Policy</Link>
          <Link href="/">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

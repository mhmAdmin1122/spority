import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Live-channels */}
      <div className="footer-innerBox footer-links-liveChannels">
        <h3>Live Channels</h3>
        <div className="Footer-channel-links-box">
          <Link href="/Live/6659f2e86f215f50ac4ab6da">PTV Sport</Link>
          <Link href="/Live/6659f3656f215f50ac4ab6dc">SKY Sport</Link>
          <Link href="/Live/6659f5226f215f50ac4ab6ee">TEN Sport</Link>
          <Link href="/Live/6659f2a36f215f50ac4ab6d6">A Sport HD</Link>
          <Link href="/Live">More Channels</Link>
        </div>
      </div>

      {/* Follow us */}
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

      {/* Help */}
      <div className="footer-innerBox footer-links-help">
        <h3>Help</h3>
        <div className="Footer-help-links-box">
          <Link href="/Contact">Contact Service</Link>
          {/* <Link href="/">Create a Meeting</Link> */}
          <Link href="/Describe-Problems">Describe Problem</Link>
          <Link href="/FAQ's">FAQ</Link>
          <Link href="/Feed-Backs">FeedBack</Link>
        </div>
      </div>

      {/* About-list */}
      <div className="footer-innerBox footer-links-aboutUS">
        <h3>About Us</h3>
        <div className="Footer-help-links-box">
          <Link href="/">Who we are?</Link>
          {/* <Link href="/">Our Mission</Link> */}
          <Link href="/">Our Team</Link>
          <Link href="/Privacy-Policy">Privacy Policy</Link>
          <Link href="/Disclaimers">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

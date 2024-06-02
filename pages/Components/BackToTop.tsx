import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerScroll = 100;
      setShowButton(scrollTop > triggerScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="back-to-top-btn"
      onClick={scrollToTop}
      style={{ display: showButton ? "flex" : "none" }}
    >
      <FaArrowUp />
    </button>
  );
};
export default BackToTop;

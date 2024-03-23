import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./icons/bgNode.svg";
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade"

const Layout = () => {
  const [text, setText] = useState("");
  const message = "Providing you with the First Aid Mental Health Care Service";
  const typingSpeed = 13; // Faster typing speed

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === message.length) {
        clearInterval(interval);
      } else {
        setText((prevText) => prevText + message[currentIndex]);
        currentIndex++;
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Bounce>
          <img src={Background} className="max-w-sm rounded-lg shadow-2xl" /></Bounce>
          <div>
            <Fade>
            <h1 className="text-5xl font-bold">Mental Health ChatBot</h1>
            </Fade>
            <p className="py-6">{text}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

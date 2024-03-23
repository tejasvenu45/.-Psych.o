import React, { useState, useEffect } from 'react';
const Layout = () => {
  const [text, setText] = useState('');
  const message = "Welcome to the best Mental Health Bot";
  const typingSpeed = 100; // Adjust typing speed as needed

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex === message.length) {
        clearInterval(interval);
      } else {
        setText(prevText => prevText + message[currentIndex]);
        currentIndex++;
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-hero-pattern">
      <h1 className="text-4xl font-bold text-center">{text}</h1>
    </div>
  );
};

export default Layout;

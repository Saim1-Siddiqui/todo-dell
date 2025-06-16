import React, { useState, useEffect } from 'react';
import '../style/style.css';

const Header = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <h1 className="logo">📝 My To-Do App</h1>
      <span className="top-right-datetime">{now.toLocaleString()}</span>
    </header>
  );
};

export default Header;

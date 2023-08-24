import React from 'react';
import './Header.css';



export  function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/rocket.jpeg" alt="logo"/>
      </div>
      <div className="title">IPROPEL</div>
      <nav className="nav">
        <a href="#login">Login</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}


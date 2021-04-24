
import React from 'react';
import logo from "../../image/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
              <a href="/home">Home</a>
              <a href="/add">Add</a>
              <a href="/call">Call</a>
              <a href="/sms">SMS</a>
            </nav>
        </div>
    );
};

export default Header;
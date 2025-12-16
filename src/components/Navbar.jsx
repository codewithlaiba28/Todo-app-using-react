import React, { useState, useEffect } from "react";

import nav_logo from "../assets/nav_logo.png";
import "../index.css";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    // URL ke hisab se menu update karo
    if (location.pathname === "/") setMenu("Home");
    else if (location.pathname === "/about") setMenu("About");
    else if (location.pathname === "/features") setMenu("Features");
    else if (location.pathname === "/contact") setMenu("Contact");
  }, [location]);

  const [isLogin, setIsLogin] = useState(false);
  const [menu, setMenu] = useState(() => {
    return localStorage.getItem("menu") || "Home";
  });
  const handleLoginClick = () => {
    setIsLogin(!isLogin);
    setMenu("");
    localStorage.removeItem("menu");
  };

  return (
    <div className="px-10 py-4 flex justify-between items-center" style={{ fontFamily: "var(--font-family)", backgroundColor: "var(--preto)", color: "var(--text-color)", }}>
      <div className="flex gap-2 items-center">
        <img src={nav_logo} alt="Logo" className="w-10 h-auto" />
        <p className="text-4xl font-bold">Todo</p>

      </div>


      <ul className="flex justify-between items-center gap-10 text-xl font-medium " >
        <li onClick={() => { setMenu("Home"); localStorage.setItem("menu", "Home"); }}>
          <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("About"); localStorage.setItem("menu", "About"); }}>
          <Link style={{ textDecoration: 'none' }} to='/about'>About</Link>
          {menu === "About" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("Features"); localStorage.setItem("menu", "Features"); }}>
          <Link style={{ textDecoration: 'none' }} to='/features'>Features</Link>
          {menu === "Features" ? <hr /> : <></>}
        </li>

        <li onClick={() => { setMenu("Contact"); localStorage.setItem("menu", "Contact"); }}>
          <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
          {menu === "Contact" ? <hr /> : <></>}
        </li>

      </ul>

      <Link to="/login">
        <button
          className="px-8 py-2 rounded-4xl text-xl"
          style={{ background: "var(--gradiente-vermelho)" }}
          onClick={handleLoginClick}
        >
          {isLogin ? "Logout" : "Login"}
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

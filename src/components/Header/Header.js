import "../../Style/Style.css";
import "popper.js";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import loginService from "../../services/LoginService";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(loginService.isLoggedIn);
  const location = useLocation();

  useEffect(() => {
    const handleLoginChange = () => {
      setIsLoggedIn(loginService.isLoggedIn);
    };

    loginService.subscribe(handleLoginChange);

    return () => {
      loginService.subscribers = loginService.subscribers.filter(
        (subscriber) => subscriber !== handleLoginChange
      );
    };
  }, []);

  const logout = () => {
    loginService.logout();
    window.location.href = "/";
  }

  const renderNavItem = (path, label, icon) => (
    <li className={`nav-item ${location.pathname === path ? "active" : ""}`}>
      <NavLink className="nav-link" to={path}>
        {icon && <i className={`fa fa-${icon}`} aria-hidden="true"></i>} {label}
      </NavLink>
    </li>
  );

  const renderLogoutButton = () => (
    <li className="nav-item">
      <button onClick={logout} type="button" className="nav-link logout-button">
        Logout
      </button>
    </li>
  );

  return (
    <div className="sub_page">
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <NavLink className="navbar-brand" to="/">
                <span>Info School</span>
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  {renderNavItem("/", "Inicio")}
                  {renderNavItem("/about", "Sobre")}
                  {renderNavItem("/services", "Serviços")}
                  {renderNavItem("/why-us", "Por que nós")}
                  {renderNavItem("/team", "Equipe")}
                  {isLoggedIn ? (
                    renderLogoutButton()
                  ) : (
                    <>
                      {renderNavItem("/login", "Login", "user")}
                      {renderNavItem("/cadastro", "Cadastro", "user")}
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;

import "../../Style/Style.css";
import "popper.js";
import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import loginService from "../../services/LoginService";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(loginService.isLoggedIn);

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
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="/">
                      Inicio <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      Sobre
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">
                      Serviços
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/why-us">
                      Por que nós
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/team">
                      Equipe
                    </NavLink>
                  </li>
                  {isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <button
                          onClick={loginService.logout}
                          type="button"
                          className="nav-link"
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                          <i className="fa fa-user" aria-hidden="true"></i>{" "}
                          Login
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/cadastro">
                          <i className="fa fa-user" aria-hidden="true"></i>{" "}
                          Cadastro
                        </NavLink>
                      </li>
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

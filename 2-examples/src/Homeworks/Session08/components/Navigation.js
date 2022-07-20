import React from "react";
import { Link, NavLink } from "react-router-dom";
import './styles.css'

export default function Navigation() {
  return (
    <div className="card text-center">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <nav className="nav-link navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarHome"
                  aria-controls="navbarHome"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarHome"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link bg-dark"
                        style={{width : 100}}
                        to="/"
                        role="button"
                      >
                        Home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </li>
          <li className="nav-item">
            <nav className="nav-link navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCustomer"
                  aria-controls="navbarCustomer"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarCustomer"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <span
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Customer
                      </span>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <NavLink
                            className={`dropdown-item`}
                            to="/customer/list"
                            activeclassname="active-menu"
                          >
                            List
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item`}
                            to="/customer/form"
                          >
                            Form
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </li>
          <li className="nav-item">
            <nav className="nav-link navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarProduct"
                  aria-controls="navbarProduct"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarProduct"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <span
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Product
                      </span>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li>
                          <NavLink
                            className={`dropdown-item`}
                            to="/product/list"
                          >
                            List
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className={`dropdown-item`}
                            to="/product/form"
                          >
                            Form
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </li>
        </ul>
      </div>
    </div>
  );
}

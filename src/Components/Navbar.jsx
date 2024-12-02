import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, signOut }) => {
  const navigate = useNavigate();

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light">
          <img
            alt="Memora logo"
            src="./logo_no_bg.png"
            style={{
              maxWidth: "130px",
              marginBottom: "0px",
              transition: "transform 0.3s ease-in-out",
            }}
            className="logo-img"
          />
        </Link>
        {/* <Link to="/" className="navbar-brand text-light fw-bold">
          Memora
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="white"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)} // This goes back to the previous page
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light">
                Contact
              </Link>
            </li>
            {user && (
              <li className="nav-item">
                <div className="dropstart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="white"
                    className="bi bi-person-circle dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    viewBox="0 0 16 16"
                    style={{ cursor: "pointer" }}
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                  <ul className="dropdown-menu dropdown-menu-start">
                    <li>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        style={{ cursor: "pointer" }}
                        onClick={signOut}
                      >
                        <i class="bi bi-box-arrow-right"></i>
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { signOut } from "aws-amplify/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ user, signOut }) {
  const navigate = useNavigate();
  const handleBack = () => navigate(`/`);

  const handleHome = () => navigate(`/`);
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          {/* Logo as a clickable homepage */}
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            onClick={handleHome}
          >
            {/*             <img
              src="/logo_no_bg.png"
              alt="Memora-Logo"
              style={{ height: "20px", width: "auto", marginRight: "10px" }}
            /> */}
            Memora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={handleHome}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-disabled="false"
                  style={{ cursor: "pointer" }}
                >
                  About us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="white"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
                style={{ cursor: "pointer" }}
                onClick={handleBack}
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
              </svg>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success bg-light"
                type="submit"
              >
                Search
              </button>
            </form>
            {/* Conditionally rendering the sign out button */}
            {user && (
              <div className="text-danger bg-light color-red rounded-2 ms-5">
                <li className="nav-item">
                  <a
                    className="nav-link active flex-md-grow-1 p-1"
                    aria-disabled="false"
                    onClick={signOut}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    Sign Out
                  </a>
                </li>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

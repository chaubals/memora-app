import React from "react";
import { Link } from "react-router-dom";

function StarterPage() {
  return (
    <div className="starter-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Memora
          </Link>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content-container">
        <h1>Welcome to Memora!</h1>
        <p>
          Memora helps you learn faster using the Spaced Repetition technique!
        </p>

        <section className="about-section">
          <h2>What is Spaced Repetition?</h2>
          <p>
            Spaced Repetition is a proven technique that helps you memorize and
            retain information over time...
          </p>
          {/* Add animations/images/videos related to spaced repetition */}
        </section>

        <section className="flashcards-section">
          <h2>Explore Topics</h2>
          <p>
            We have flashcards on a variety of topics to help you learn and
            remember key concepts.
          </p>
          {/* Add a list of topics with images/icons */}
        </section>

        <section className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>
            If you want to dive in and start learning with Memora, log in or
            sign up now!
          </p>
          <div className="cta-buttons">
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
            <Link className="btn btn-secondary" to="/signup">
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StarterPage;

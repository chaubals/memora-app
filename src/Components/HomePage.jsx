import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); //Initialize the navigate function

  const initialTopics = [
    "DSA",
    "OOP",
    "Java",
    "C#",
    "Python",
    "HTML",
    "React",
    "SQL",
    "Node.js",
    "C++",
  ];

  const [topics, setTopics] = useState(initialTopics);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const q = e.target.value;

    if (q === "") {
      setTopics(initialTopics);
      setSearchQuery("");
    } else {
      setSearchQuery(q);
      const filteredTopics = initialTopics.filter((topic) =>
        topic.toLowerCase().startsWith(q.toLowerCase())
      );
      setTopics(filteredTopics);
    }
  };

  const handleCardClick = (topic) => {
    const encodedTopic = encodeURIComponent(topic);
    console.log(`Clicked on ${encodedTopic}`); //Logging the clicked topic
    navigate(`/flashcards/${encodedTopic}`); //Navigate to the flashcards page
  };

  // const topics = ["DSA", "OOP", "Java", "C#"];

  return (
    <div>
      <div className="container mt-0">
        <h2 className="text-center mb-4 fw-bold">
          What do you want to learn today?
        </h2>

        <form className="d-flex m-3 mx-auto w-50" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search topic"
            aria-label="Search"
            value={searchQuery}
            onChangeCapture={handleChange}
          />
          <button className="btn btn-outline-success fw-bold" type="submit">
            Search
          </button>
        </form>

        <div className="container">
          <div className="row row-cols-2 g-2">
            {topics.map((topic) => (
              <div
                key={topic}
                className="col card topic-card bg-body-secondary border border-0 rounded-4"
                onClick={() => navigate(`/flashcards/${topic}`)}
              >
                <div className="card-body text-center">
                  <h5 className="card-title">{topic}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

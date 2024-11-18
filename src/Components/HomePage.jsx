import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate(); //Initialize the navigate function

  const handleCardClick = (topic) => {
    const encodedTopic = encodeURIComponent(topic);
    console.log(`Clicked on ${encodedTopic}`); //Logging the clicked topic
    navigate(`/flashcards/${encodedTopic}`); //Navigate to the flashcards page
  };

  const topics = ["DSA", "OOP", "Java", "C#"];

  return (
    <div>
      <div className="container mt-0">
        <h2 className="text-center mb-4 fw-bold">Select a Topic</h2>
        <div className="d-flex flex-column align-items-center">
          {topics.map((topic) => (
            <div
              key={topic}
              className="card topic-card mb-3 w-50 bg-body-secondary border border-0 rounded-4"
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
  );
};

export default HomePage;

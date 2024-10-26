import React from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); //Initialize the navigate function

  const handleCardClick = (topic) => {
    const encodedTopic = encodeURIComponent(topic);
    console.log(`Clicked on ${encodedTopic}`); //Logging the clicked topic
    navigate(`/flashcards/${encodedTopic}`); //Navigate to the flashcards page
  };

  const topics = ['DSA', 'OOP', 'Java', 'C#'];

  return (
    <div className="homepage">
      <header className="app-header">
        <h2>Welcome to Memora. This is the Homepage</h2>
      </header>
      <div className="card-container">
        {topics.map((topic) => (
          <Card key={topic} title={topic} onClick={() => { handleCardClick(topic) }} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;


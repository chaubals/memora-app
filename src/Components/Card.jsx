import React from "react";
import './Card.css';

const Card = ({ title, onClick }) => {
  return(
    <div className="card" onClick={onClick}>
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;
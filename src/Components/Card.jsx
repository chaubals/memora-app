import React from "react";
import "./CSS/Card.css";

const Card = ({ title, onClick }) => {
  return (
    <div
      className="card border border-primary border-2 bg-body-secondary shadow-lg"
      onClick={onClick}
    >
      <h3 className="card-title">{title}</h3>
    </div>
  );
};

export default Card;

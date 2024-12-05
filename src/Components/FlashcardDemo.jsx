import React, { useState } from "react";
import "./CSS/FlashcardDemo.css";
import ProgressBar from "./ProgressBar";

function FlashcardDemo({
  title,
  description,
  buttonText,
  onCardClick,
  onButtonClick,
  icon,
}) {
  //State to manage whether the card is a flashcard bundle or not (i.e. create flashcard option)
  const [isFlashcardBundle, setIsFlashcardBundle] = useState(false); //initial value true

  return (
    <div>
      <div className="d-flex flex-column align-items-center mx-2">
        {isFlashcardBundle && <ProgressBar />}
        <div
          className="shadow-lg p-3 card border-dark bg-info-subtle border-2 flashcard-demo fw-bold rounded-4"
          onClick={onCardClick}
        >
          <div
            className="card-body text-center d-flex flex-column align-items-center justify-content-center fw-bold"
            style={{ height: "100%" }}
          >
            {icon && <div className="mb-2">{icon}</div>}
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{description}</p>
          </div>
        </div>
        <button className="btn btn-primary mt-3" onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default FlashcardDemo;

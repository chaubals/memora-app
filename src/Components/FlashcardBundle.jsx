import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import flashcardsData from "../flashcardsData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; //Importing axios for making API requests

const FlashcardBundle = ({ title }) => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic);

  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardCount, setCardCount] = useState(1);
  const [loading, setLoading] = useState(true); //Loading state
  const [error, setError] = useState(null); //Error state

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(
          `https://x8u81cy04l.execute-api.us-east-1.amazonaws.com/dev/flashcards/${decodedTopic}`
        );
        setFlashcards(response.data);
        setLoading(false); //Stop loading when the data is loaded
      } catch (error) {
        setError("Failed to load flashcards");
        setLoading(false); //Stop loading even if there is an error
      }
    };

    fetchFlashcards();
  }, [decodedTopic]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  const handleFlip = () => setIsFlipped(!isFlipped);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleBack = () => navigate(`/`);
  //Setting card count
  const handleCardCount = () => setCardCount(cardCount);

  if (loading) {
    return (
      <div>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } //Showing the loading effect when flashcard is being loaded

  if (error) {
    return <div>{error}</div>;
  } //Show error, if any

  return (
    <div className="container text-center my-4">
      {/* Flashcard Demo Section */}
      <div className="d-flex justify-content-center mb-3">
        <div className="d-flex flex-column align-items-center mx-2">
          <div
            className="shadow-lg p-3 card text-primary border-dark bg-body-secondary border-3"
            onClick={() => {
              openModal();
              setIsFlipped(false);
            }}
            style={{
              width: "15rem",
              height: "20rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card-body text-center d-flex flex-column align-items-center justify-content-center"
              style={{ height: "100%" }}
            >
              <h4 className="card-title fw-bold text-primary">
                {decodedTopic} Flashcards
              </h4>
              <p className="card-text text-muted link-underline-dark">
                Click to show flashcards
              </p>
            </div>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              openModal();
              setCurrentCardIndex(0);
            }}
          >
            Show Flashcards
          </button>
        </div>

        <div className="d-flex flex-column align-items-center mx-2">
          <div
            className="shadow-lg p-3 card text-primary border-dark bg-body-secondary border-3"
            style={{
              width: "15rem", // Adjust width if needed to exactly match the other card
              height: "20rem", // Adjust height to match other card
              padding: "1rem", // Ensure padding is consistent
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box", // Ensures padding doesn’t alter the height/width
            }}
          >
            <div className="card-body text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <p className="card-text text-muted">Create your own flashcards</p>
            </div>
          </div>
          <button className="btn btn-outline-primary mt-3">
            Create New Flashcards
          </button>
        </div>
      </div>

      {/**************************************MODAL DESIGN BEGINS HERE************************************/}

      {/* Flashcard Modal */}
      {showModal && (
        <div
          className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          onClick={closeModal}
        >
          <div
            className="p-4 bg-body-secondary rounded shadow-lg position-relative d-flex justify-content-center align-items-center border border-dark border-4"
            onClick={(e) => {
              e.stopPropagation();
              handleFlip();
            }}
            style={{
              cursor: "pointer",
              width: "450px", // Fixed width
              height: "550px", // Fixed height
              maxWidth: "90%", // Optional: for smaller screens
              maxHeight: "90%", // Optional: for smaller screens
              overflow: "hidden", // Prevents content from spilling outside
            }}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-2"
              onClick={closeModal}
              style={{ color: "black" }}
            />
            <div
              className="text-center"
              onClick={(e) => {
                e.stopPropagation();
                handleFlip();
              }}
              style={{
                cursor: "pointer",
                width: "100%", // Ensure it fits within modal width
                height: "100%", // Ensure it fits within modal height
                overflow: "auto", // Enables scrolling for content that overflows
                padding: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textOverflow: "ellipsis", // Cuts off text with ellipsis if it overflows
                whiteSpace: "pre-wrap", // Allows wrapping long text to fit inside
                fontSize: "calc(1rem + 1vw)", // Dynamically adjusts font size based on viewport
              }}
            >
              <p className="display-8 fw-bold text-secondary-emphasis">
                {!isFlipped
                  ? flashcards[currentCardIndex]?.question || "No question"
                  : flashcards[currentCardIndex]?.answer || "No answer"}
              </p>
            </div>
            {/* Previous Button */}
            <div
              className="position-absolute start-0 d-flex align-items-center"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                marginLeft: "5px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handlePrevCard();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                />
              </svg>
            </div>
            {/* Next Button */}
            <div
              className="position-absolute end-0 d-flex align-items-center"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1, // Ensure buttons are above other elements
                right: "-90px", // Position outside the flashcard's content
                padding: "10px", // Add space around the buttons
                marginRight: "-5px",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleNextCard();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-square"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardBundle;

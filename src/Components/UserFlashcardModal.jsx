import axios from "axios";
import DeleteModal from "./DeleteModal";
import React from "react";
import { useState } from "react";
import "./CSS/UserFlashcardModal.css";

function UserFlashcardModal({
  userFlashcards,
  currentCardIndex,
  isFlipped,
  closeModal,
  handleFlip,
  handleNextCard,
  handlePrevCard,
  handleDeleteFlashcard,
  userId,
}) {
  if (!userFlashcards || userFlashcards.length === 0) {
    return (
      <div className="modal" onClick={closeModal}>
        <div className="modal-content">
          <p>No Custom Flashcards Found</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    );
  }
  const currentCard = userFlashcards[currentCardIndex];
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const openDeleteModal = () => {
    setIsDeleteModal(true);
  };
  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        onClick={closeModal}
      >
        <div
          className="card-container p-2 bg-info-subtle rounded-4 shadow-lg position-relative d-flex justify-content-center align-items-center border border-dark border-1"
          onClick={(e) => {
            e.stopPropagation();
            handleFlip();
          }}
          style={{
            cursor: "pointer",
            width: "400px",
            height: "500px",
            maxWidth: "90%",
            maxHeight: "90%",
          }}
        >
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-2"
            onClick={closeModal}
            style={{ color: "black", zIndex: 10 }}
          />

          {/* Flashcard Content with Flip Animation */}
          <div className={`flashcard ${isFlipped ? "flipped" : ""}`}>
            {/* Front of the card */}
            <div className="flashcard-front text-center">
              <p
                className="display-8 fw-bold text-secondary-emphasis fs-3"
                style={{
                  overflow: "auto",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "calc(1rem + 1vw)",
                }}
              >
                {userFlashcards[currentCardIndex]?.question || "No question"}
              </p>
            </div>

            {/* Back of the card */}
            <div className="flashcard-back text-center">
              <p
                className="display-8 fw-bold text-secondary-emphasis fs-3"
                style={{
                  overflow: "auto",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "calc(1rem + 1vw)",
                }}
              >
                {userFlashcards[currentCardIndex]?.answer || "No answer"}
              </p>
            </div>
          </div>

          {/* Previous and Next Buttons */}
          <div
            className="position-absolute start-0 d-flex align-items-center"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
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
              className="bi bi-arrow-left-square"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
              />
            </svg>
          </div>
          <div
            className="position-absolute end-0 d-flex align-items-center"
            style={{
              top: "50%",
              transform: "translateY(-50%)",
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
              className="bi bi-arrow-right-square"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
              />
            </svg>
          </div>
          <div
            className="position-absolute end-0 d-flex align-items-center"
            style={{
              top: "5%",
              transform: "translateY(-62%)",
              marginRight: "43%",
            }}
          >
            <div
              className="btn btn-danger p-2"
              onClick={(e) => {
                e.stopPropagation();
                openDeleteModal();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="danger"
                class="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {isDeleteModal && (
        <DeleteModal
          onDelete={() => {
            handleDeleteFlashcard(
              userId,
              userFlashcards[currentCardIndex].flashcardId
            );
            closeDeleteModal();
          }}
          onCancel={closeDeleteModal}
        />
      )}
    </div>
  );
}

export default UserFlashcardModal;

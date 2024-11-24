import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; //Importing axios for making API requests
import FlashcardModal from "./FlashcardModal";
import CreateFlashcardModal from "./CreateFlashcardModal";
import FlashcardDemo from "./FlashcardDemo";
import UserFlashcardModal from "./UserFlashcardModal";
import { Auth } from "aws-amplify";

const FlashcardBundle = ({ title, userEmail }) => {
  const navigate = useNavigate();
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic);
  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false); //Modal for premade flashcards
  const [showCreateModal, setShowCreateModal] = useState(false); //Modal for create flashcards
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //Track which modal is active
  const [isUserFlashcardModal, setIsUserFlashcardModal] = useState(false);
  const [userFlashcards, setUserFlashcards] = useState([]); //State to manage user-created flashcards
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await axios.get(
          `https://x8u81cy04l.execute-api.us-east-1.amazonaws.com/dev/flashcards/${decodedTopic}`
        );
        setFlashcards(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load flashcards");
        setLoading(false);
      }
    };
    fetchFlashcards();
  }, [decodedTopic]);
  const fetchUserCreatedFlashcards = async () => {
    try {
      const userId = userEmail;
      console.log("Email ID: ", userId);
      const response = await axios.get(
        `https://x8u81cy04l.execute-api.us-east-1.amazonaws.com/dev/flashcards/user/${userId}`
      );
      setUserFlashcards(response.data);
      console.log("User flashcards: ", userFlashcards);
      console.log("showModal: ", showModal);
      console.log("isUserFlashcardsModal: ", isUserFlashcardModal);
      setIsUserFlashcardModal(true); //Indicate that the modal is for user created flashcards
      setShowModal(true); //Open the modal
    } catch (error) {
      console.error("Error fetching user-created flashcards: ", error);
    }
  };
  //Handling the 'Next' button for both modals (premade flashcard and user-made flashcards modals)
  const handleNextCard = () => {
    const currentFlashcards = isUserFlashcardModal
      ? userFlashcards
      : flashcards;
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + 1) % currentFlashcards.length
    );
    setIsFlipped(false);
  };
  const handlePrevCard = () => {
    const currentFlashcards = isUserFlashcardModal
      ? userFlashcards
      : flashcards;
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? currentFlashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };
  const handleFlip = () => setIsFlipped(!isFlipped);
  const openModal = () => {
    setShowModal(true);
    setIsUserFlashcardModal(false);
    setIsFlipped(false);
  };
  const closeModal = () => setShowModal(false);
  const openCreateModal = () => setShowCreateModal(true);
  const closeCreateModal = () => setShowCreateModal(false);
  const handleSaveFlashcard = async () => {
    try {
      const userId = userEmail;
      await axios.post(
        "https://x8u81cy04l.execute-api.us-east-1.amazonaws.com/dev/flashcards/create-flashcards",
        {
          userId: userId,
          topic: decodedTopic,
          question: newFlashcard.question,
          answer: newFlashcard.answer,
        }
      );
      setNewFlashcard({ question: "", answer: "" });
    } catch (error) {
      console.error("Error saving flashcard: ", error);
    }
  };
  const handleDeleteFlashcard = () => {};
  if (loading) {
    return (
      <div>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="container text-center my-4">
      <div className="d-flex justify-content-center mb-3">
        {/* Flashcard Demo for Premade flashcards */}
        <FlashcardDemo
          title={`${decodedTopic} Flashcards`}
          description="Click to show flashcards"
          buttonText="Show Flashcards"
          onCardClick={openModal}
          onButtonClick={openModal}
        ></FlashcardDemo>
        {/* Flashcard Demo for User-Created flashcards */}
        <FlashcardDemo
          title={`Custom ${decodedTopic} Flashcards`}
          description="Click to show your flashcards"
          buttonText="Show My Flashcards"
          onCardClick={fetchUserCreatedFlashcards}
          onButtonClick={fetchUserCreatedFlashcards}
        ></FlashcardDemo>
        {/* Create Flashcards Section */}
        <FlashcardDemo
          title="Create Your Own Flashcards"
          description="Click to create your own flashcards"
          buttonText="Create New Flashcards"
          onCardClick={openCreateModal}
          onButtonClick={openCreateModal}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          }
        />
      </div>
      {/* Premade Flashcard Modal */}
      {showModal && !isUserFlashcardModal && (
        <FlashcardModal
          flashcards={flashcards}
          currentCardIndex={currentCardIndex}
          isFlipped={isFlipped}
          closeModal={closeModal}
          handleFlip={handleFlip}
          handleNextCard={handleNextCard}
          handlePrevCard={handlePrevCard}
        />
      )}
      {/* Custom Flashcards Modal */}
      {showModal && isUserFlashcardModal && (
        <>
          {console.log("Rendering the user flashcards modal")}
          <UserFlashcardModal
            userFlashcards={userFlashcards}
            currentCardIndex={currentCardIndex}
            isFlipped={isFlipped}
            closeModal={() => {
              setIsUserFlashcardModal(false);
              setShowModal(false);
            }}
            handleFlip={handleFlip}
            handleNextCard={handleNextCard}
            handlePrevCard={handlePrevCard}
          />
        </>
      )}
      {/* Crate Flashcard Modal */}
      {showCreateModal && (
        <CreateFlashcardModal
          closeCreateModal={closeCreateModal}
          question={newFlashcard.question} // Access question from newFlashcard state
          setQuestion={(value) =>
            setNewFlashcard((prev) => ({ ...prev, question: value }))
          } // Update question in newFlashcard state
          answer={newFlashcard.answer} // Access answer from newFlashcard state
          setAnswer={(value) =>
            setNewFlashcard((prev) => ({ ...prev, answer: value }))
          } // Update answer in newFlashcard state
          handleSaveFlashcard={handleSaveFlashcard} // Pass save handler
          decodedTopic={decodedTopic}
        />
      )}
    </div>
  );
};
export default FlashcardBundle;

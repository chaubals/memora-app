import React, {useState, useEffect} from "react";
import "./FlashcardBundle.css"; //CSS to style the flashcards
import { useParams, useNavigate } from "react-router-dom";
import flashcardsData from "../flashcardsData.json";

const FlashcardBundle = ({ title }) => {
  const navigate = useNavigate(); //Initializing the navigation function
  const { topic } = useParams(); //Getting the topic from the URL
  const decodedTopic = decodeURIComponent(topic);

  const [flashcards, setFlashcards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0); //Track the flashcard's index
  const [isFlipped, setIsFlipped] = useState(false); //Track if the card is flipped
  const [showModal, setShowModal] = useState(false); //Track if the flashcard modal is visible (i.e. pop-up)

  //Loading flashcards for the selected component

  useEffect(() => {
    if (flashcardsData[decodedTopic]){
      setFlashcards(flashcardsData[decodedTopic]);
    } else {
      setFlashcards([]);
    }
  }, [decodedTopic]);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      (prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1)
    )
    setIsFlipped(false); //Reset the flip to false
  };

  const handleFlip = () => setIsFlipped(!isFlipped);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleBack = () => navigate(`/`);

  return(
    <div>
      <button className="button-back" onClick={handleBack}>Back</button>
      <div className="flashcard-container">
        <div className="flashcard-demo" onClick={openModal}>
          <h3>{decodedTopic} Flashcards</h3>
          <u>Click to show flashcards</u>
        </div>
        <div className="flashcard-demo" onClick={openModal}>
          <h3>+</h3>
          <u>Create your own flashcards</u>
        </div>
      </div>
      <button className="button-show-modal" onClick={() => {
        openModal();
        setCurrentCardIndex(0)}}>Show Flashcards</button>
      {/*Modal for flashcards opened*/}
      {showModal && (
      <div className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="button-close-modal" onClick={closeModal}>Close</button>
          <div className="flashcard" onClick={handleFlip}>
            {!isFlipped ? (
              <p>{flashcards[currentCardIndex].question}</p>
             ) : (<p>{flashcards[currentCardIndex].answer}</p>
            )}
          </div>
        </div>
        <div className="button-navigation" onClick={(e) => e.stopPropagation()}>
            <button className="button-navigation-previous" onClick={handlePrevCard}>Previous</button>
            <button className="button-navigation-next" onClick={handleNextCard}>Next</button>
        </div>
      </div>
      )}
      <button className="button-create-flashcards">Create new flashcards</button>
    </div>
  );
};

export default FlashcardBundle;
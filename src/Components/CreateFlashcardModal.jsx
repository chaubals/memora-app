//Create Flashcard Modal
function CreateFlashcardModal({
  closeCreateModal,
  question,
  setQuestion,
  answer,
  setAnswer,
  handleSaveFlashcard,
  handleNextCard,
  handlePrevCard,
  decodedTopic,
}) {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 1050,
      }}
      onClick={closeCreateModal}
    >
      <div
        className="p-4 bg-light rounded shadow position-relative"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "425px",
          maxWidth: "90%",
          padding: "2rem",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          onClick={closeCreateModal}
          aria-label="Close"
          style={{
            background: "dark",
            color: "#555",
          }}
        />
        <h4 className="fw-bold text-center mb-4 text-primary">
          Create Flashcards for {decodedTopic}
        </h4>
        <div className="form-group mb-3">
          <label
            htmlFor="question"
            className="fw-bold mb-2"
            style={{ fontSize: "1rem" }}
          >
            Question
          </label>
          <input
            id="question"
            type="text"
            className="form-control"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter the question here"
            style={{
              borderRadius: "10px",
              border: "1px solid #ddd",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "10px",
            }}
          />
        </div>
        <div className="form-group mb-4">
          <label
            htmlFor="answer"
            className="fw-bold mb-2"
            style={{ fontSize: "1rem" }}
          >
            Answer
          </label>
          <input
            id="answer"
            type="text"
            className="form-control"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter the answer here"
            style={{
              borderRadius: "10px",
              border: "1px solid #ddd",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)",
              padding: "10px",
            }}
          />
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
            width="25"
            height="25"
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
        {/* Next Button */}
        <div
          className="position-absolute end-0 d-flex align-items-center"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            marginRight: "5px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleNextCard();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
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
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSaveFlashcard}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateFlashcardModal;

//Flashcard demo rendering

function FlashcardDemo({
  title,
  description,
  buttonText,
  onCardClick,
  onButtonClick,
  icon,
}) {
  return (
    <div>
      <div className="d-flex flex-column align-items-center mx-2">
        <div
          className="shadow-lg p-3 card text-primary border-dark bg-body-secondary border-2"
          onClick={onCardClick}
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
            {icon && <div className="mb-2">{icon}</div>}
            <h4 className="card-title fw-bold text-primary">{title}</h4>
            <p className="card-text text-muted">{description}</p>
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

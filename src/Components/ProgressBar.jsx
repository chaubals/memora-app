function ProgressBar() {
  return (
    <div>
      {/* Progress bar - premade flashcards */}
      <div
        className="progress m-3"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ width: "150px" }}
      >
        <div class="progress-bar w-50"></div>
      </div>
    </div>
  );
}

export default ProgressBar;

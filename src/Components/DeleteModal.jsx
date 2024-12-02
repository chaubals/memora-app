function DeleteModal({ onDelete, onCancel }) {
  console.log("Delete Modal rendered.");

  return (
    <div
      className="modal fade show" // Ensure "show" is applied to make it visible
      tabIndex="-1"
      style={{ display: "block", zIndex: 1050 }} // Ensure the modal is visible
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Think again?</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onCancel} // Call onCancel on close button click
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this flashcard?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              onClick={onDelete} // Call onDelete on delete button click
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={onCancel} // Call onCancel on cancel button click
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;

import React from "react";

function Contact() {
  return (
    <div className="container mt-2 w-50">
      <div className="card shadow-lg">
        <div className="card-header bg-dark text-light">
          <h5 className="card-title text-start mb-0 fw-bold">
            Development Team Information
          </h5>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <h6 className="text-muted">Contributors</h6>
            <p className="mb-0">Siddhesh R Chaubal</p>
            <p>Tejashree Gayakwad</p>
          </div>
          <div>
            <h6 className="text-muted">Service Email</h6>
            <p className="mb-0">
              <a
                href="mailto:memora.servicedesk@gmail.com"
                className="text-decoration-none"
              >
                memora.servicedesk@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="card-footer text-center bg-light">
          <p className="mb-0 text-muted">Thank you for visiting!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

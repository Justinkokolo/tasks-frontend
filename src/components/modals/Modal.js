import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModals }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container ">
        {children}
        <button className="modal-close" onClick={closeModals}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;

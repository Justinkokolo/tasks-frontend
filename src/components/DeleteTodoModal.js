import React from "react";

const DeleteTodoModal = ({ selectedTodo, onConfirmDelete, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to delete this todo?</p>
        <button onClick={onConfirmDelete}>Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteTodoModal;

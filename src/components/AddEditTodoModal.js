import React from "react";

const AddEditTodoModal = ({
  selectedTodo,
  editedTitle,
  newTodo,
  onEditSubmit,
  onAddSubmit,
  closeModal,
  setEditedTitle,
  setNewTodo
}) => {
  const handleSubmit = selectedTodo ? onEditSubmit : onAddSubmit;

  return (
    <div className="modal">
      <div className="modal-content">
        {selectedTodo ? <p>Edit Todo</p> : <p>Add Todo</p>}
        {selectedTodo ? (
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <>
            <input
              type="text"
              placeholder="Title"
              value={newTodo.title}
              onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              value={newTodo.description}
              onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
            />
            <label>
              <input
                type="checkbox"
                checked={newTodo.isCompleted}
                onChange={(e) => setNewTodo({ ...newTodo, isCompleted: e.target.checked })}
              />
              Completed
            </label>
          </>
        )}
        <button onClick={handleSubmit}>
          {selectedTodo ? "Save Changes" : "Add"}
        </button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AddEditTodoModal;

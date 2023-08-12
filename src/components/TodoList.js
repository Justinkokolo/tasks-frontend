import React, { useState, useEffect } from "react";
import "./TodoList.css";
import apiService from "../services/apiService";
import AddEditTodoModal from "./AddEditTodoModal";
import DeleteTodoModal from "./DeleteTodoModal";

const TodoList = ({ setIsLogedIn, isLogin }) => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todosData = await apiService.getTodos(token);
        setTodos(todosData);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, [token, isLogin]);

  const handleDeleteClick = (todo) => {
    setSelectedTodo(todo);
    setShowDeleteModal(true);
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setEditedTitle(todo.title);
    setShowAddEditModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await apiService.deleteTodo(token, selectedTodo.id);
      setTodos((prevTodos) =>
        prevTodos.filter((todo) => todo.id !== selectedTodo.id)
      );
      setShowDeleteModal(false);
      setSelectedTodo(null);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEditSubmit = async () => {
    try {
      const updatedTodo = { ...selectedTodo, title: editedTitle };
      await apiService.updateTodo(token, updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === selectedTodo.id ? updatedTodo : todo
        )
      );
      setShowAddEditModal(false);
      setSelectedTodo(null);
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  const handleAddClick = () => {
    setShowAddEditModal(true);
  };

  const handleAddSubmit = async () => {
    try {
      const response = await apiService.createTodo(token, newTodo);
      setTodos((prevTodos) => [...prevTodos, response]);
      setShowAddEditModal(false);
      setNewTodo({
        title: "",
        description: "",
        isCompleted: false,
      });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const closeModal = () => {
    setShowAddEditModal(false);
    setShowDeleteModal(false);
    setSelectedTodo(null);
  };

  return (
    <div className="todo-list">
      <h1>Todo List For: {todos.Username}</h1>
      <button className="add-button" onClick={handleAddClick}>
        Add Todo +
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isCompleted ? "complete" : ""}>
            {todo.title}
            <div>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => handleDeleteClick(todo)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {showAddEditModal && (
        <AddEditTodoModal
          selectedTodo={selectedTodo}
          editedTitle={editedTitle}
          newTodo={newTodo}
          onEditSubmit={handleEditSubmit}
          onAddSubmit={handleAddSubmit}
          closeModal={closeModal}
          setNewTodo={setNewTodo}
          setEditedTitle={setEditedTitle}
        />
      )}

      {showDeleteModal && (
        <DeleteTodoModal
          selectedTodo={selectedTodo}
          onConfirmDelete={handleConfirmDelete}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default TodoList;

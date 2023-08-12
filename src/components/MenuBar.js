import React, { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./MenuBar.css";

export default function MenuBar({ setIsLogedIn, isLogin }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const token = localStorage.getItem("token");

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowRegisterModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogedIn(false);
  };

  return (
    <div className="menu-bar">
      {!token ? (
        <>
          <button onClick={openLoginModal}>Login</button>
          <button onClick={openRegisterModal}>Register</button>
        </>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      <Modal isOpen={showLoginModal} closeModals={closeModals}>
        <LoginForm
          closeModals={closeModals}
          setIsLogedIn={setIsLogedIn}
          isLogin={isLogin}
        />
      </Modal>

      <Modal isOpen={showRegisterModal} closeModals={closeModals}>
        <RegisterForm
          closeModals={closeModals}
          setIsLogedIn={setIsLogedIn}
          isLogin={isLogin}
        />
      </Modal>
    </div>
  );
}

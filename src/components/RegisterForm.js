// RegisterForm.js
import React from "react";
import { Formik } from "formik";
import apiService from "../services/apiService";
import "./RegisterForm.css";

export default function RegisterForm({ closeModals, setIsLogedIn, isLogin }) {
  const handleSubmit = async (values) => {
    try {
      const registrationData = {
        email: values.email,
        password: values.password,
        displayName: values.displayName,
        bio: values.bio,
        username: values.username,
      };
      const response = await apiService.register(registrationData);
      localStorage.setItem("token", response.token);
      setIsLogedIn(true);
      console.log("Registration successful:", response);
      closeModals();
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        displayName: "",
        bio: "",
        username: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={values.displayName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            value={values.bio}
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  );
}

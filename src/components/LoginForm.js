import React from "react";
import { Formik } from "formik";
import apiService from "../services/apiService";
import "./LoginForm.css";

export default function LoginForm({ closeModals, setIsLogedIn, isLogin }) {
  const handleSubmit = async (values) => {
    console.log("values:", values);
    try {
      const response = await apiService.login(values.email, values.password);
      console.log("Login successful:", response);

      localStorage.setItem("token", response.token);
      setIsLogedIn(true);
      closeModals();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      )}
    </Formik>
  );
}

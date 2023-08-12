import axios from "axios";

//const BASE_URL = "https://localhost:7044/api";
const BASE_URL = "https://justintasksapi.azurewebsites.net/api";
const apiService = {
  register: async (registrationData) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/Account/register`,
        registrationData
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/Account/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTodos: async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/Todos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createTodo: async (token, todo) => {
    try {
      const response = await axios.post(`${BASE_URL}/Todos`, todo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateTodo: async (token, todo) => {
    try {
      const response = await axios.put(`${BASE_URL}/Todos/${todo.id}`, todo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteTodo: async (token, todoId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/Todos/${todoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;

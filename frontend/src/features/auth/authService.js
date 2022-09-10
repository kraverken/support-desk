import axios from "axios";

const API_URL = "/api/users/";
// here it will be running on http://localhost:3000/api/users but we want to run on http://localhost:5000 alternatively we can set the proxy in package.json

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// LogOut user
const logout = () => localStorage.removeItem("user");

const authService = {
  register,
  login,
  logout,
};

export default authService;

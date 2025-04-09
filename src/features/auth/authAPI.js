import axios from "axios";

const baseURL = "https://jsonserver-e1us.onrender.com/users";

export const loginAPI = async (email, password) => {
  console.log("API called with email:", email, "and password:", password);

  const response = await axios.get(baseURL);
  const users = response.data;
  const matchedUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (matchedUser) {
    return {
      user: matchedUser.name,
      token: matchedUser.id,
    };
  } else {
    throw new Error("Invalid email or password");
  }
};

export const registerAPI = async (userData) => {
  const response = await axios.post(baseURL, userData);
  return response.data;
};

export const saveUserToStorage = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const getUserFromStorage = () => {
  return {
    user: JSON.parse(localStorage.getItem("user")),
    token: localStorage.getItem("token"),
  };
};

export const clearUserFromStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

import React from "react";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home Page - Public</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </>
  );
};
export default Home;

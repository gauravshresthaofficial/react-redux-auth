import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  TextField,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { loginFormValidation } from "../utils/validation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    const errors = loginFormValidation(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      dispatch(loginUser({ email, password })).then((response) => {
        if (response.error) {
          console.error("Login failed:", response.error);
        } else {
          console.log("Login successful:", response.payload);
          navigate("/");
        }
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: loginFormValidation({ ...formValues, [name]: value })[name],
    }));
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Paper elevation={3} sx={{ padding: 4, width: "100%", maxWidth: 400 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <TextField
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            margin="normal"
            fullWidth
            value={formValues.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            label="Password"
            name="password"
            type="password"
            fullWidth
            value={formValues.password}
            onChange={handleInputChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>

          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Don't have an account?{" "}
              <Button onClick={() => navigate("/register")}>Register</Button>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;

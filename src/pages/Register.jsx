import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Paper, TextField, Typography, Box } from "@mui/material";
import { registerFormValidation } from "../utils/validation";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formValues;

    const errors = registerFormValidation(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(registerUser({ name, email, password })).then((response) => {
        if (response.error) {
          console.error("Registration failed:", response.error);
        } else {
          console.log("Registration successful:", response.payload);
          navigate("/login");
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
      [name]: registerFormValidation({ ...formValues, [name]: value })[name],
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
            Register
          </Typography>
          <TextField
            variant="outlined"
            label="Name"
            name="name"
            margin="normal"
            value={formValues.name}
            onChange={handleInputChange}
            error={!!formErrors.name}
            helperText={formErrors.name}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            type="email"
            margin="normal"
            value={formValues.email}
            onChange={handleInputChange}
            error={!!formErrors.email}
            helperText={formErrors.email}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Password"
            name="password"
            margin="normal"
            type="password"
            value={formValues.password}
            onChange={handleInputChange}
            error={!!formErrors.password}
            helperText={formErrors.password}
            fullWidth
          />
          <Button variant="contained" type="submit" loading={loading} fullWidth>
            Register
          </Button>
          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}

          <Box mt={2} textAlign="center">
            <Typography variant="body2">
              Already have an account?{" "}
              <Button onClick={() => navigate("/login")}>Login</Button>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;

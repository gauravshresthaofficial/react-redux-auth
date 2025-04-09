# React Redux Authentication

This project is an authentication system built with React, Redux Toolkit, and React Router, using JSON Server as a mock backend API.

## Features

- User registration and login
- Protected routes for authenticated users
- Form validation
- Persistent login state (using localStorage)
- Error handling
- Material UI components

## Project Structure

```
react-redux-auth/
├─ src/
│  ├─ app/                  # Redux store configuration
│  │  └─ store.js
│  ├─ features/
│  │  └─ auth/              # Auth-related Redux logic
│  │     ├─ authAPI.js      # API calls for authentication
│  │     └─ authSlice.js    # Redux slice for auth state
│  ├─ pages/                # Page components
│  │  ├─ Home.jsx           # Protected home page
│  │  ├─ Login.jsx          # Login page
│  │  └─ Register.jsx       # Registration page
│  ├─ routes/              # Routing configuration
│  │  ├─ AppRoutes.jsx      # Main router
│  │  ├─ ProtectedRoute.jsx # Route guard for auth
│  │  └─ PublicRoute.jsx    # Route guard for guests
│  ├─ utils/
│  │  ├─ storage.js         # localStorage helpers
│  │  └─ validation.js      # Form validation utils
│  ├─ App.css
│  ├─ App.jsx               # Main app component
│  ├─ index.css
│  └─ main.jsx              # App entry point
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gauravshresthaofficial/react-redux-auth.git
   cd react-redux-auth
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Dependencies

- React
- Redux Toolkit
- React Router
- Material UI (MUI)
- Axios
- Vite

## Customization

1. **Styling**: Modify the CSS files or MUI theme in `App.jsx`
2. **Validation**: Update `src/utils/validation.js`
3. **API**: Modify `src/features/auth/authAPI.js` for real backend integration
4. **Routes**: Update `src/routes/AppRoutes.jsx` for additional pages

## Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gauravshresthaofficial) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gauravshresthaofficial/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:imgauravshrestha@gmail.com) [![Website](https://img.shields.io/badge/Website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://www.shresthagaurav.com/)

</div>

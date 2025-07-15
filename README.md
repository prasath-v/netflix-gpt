# Netflix GPT

- Create React App using Vite
- Add Tailwind CSS
- Header
- Routing of App
- Login Form
- Signup Form
- Form validation
- useRef hook
- Firebase setup
- Implement Signup and Signin API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged
- Constants file added and change hardcode image urls as constants

# Features

- Login/Sign Up
  - Sign In /Sign up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

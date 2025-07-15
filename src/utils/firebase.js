// src/firebase.ts (or .js)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth for authentication

// Your web app's Firebase configuration
// IMPORTANT: Replace this with your actual firebaseConfig from the Console
const firebaseConfig = {
	apiKey: "AIzaSyCKKdVzgpKhelwV5rXYhV4wzzZUXDn1-Js",
	authDomain: "netflixgpt-740cc.firebaseapp.com",
	projectId: "netflixgpt-740cc",
	storageBucket: "netflixgpt-740cc.firebasestorage.app",
	messagingSenderId: "553300098074",
	appId: "1:553300098074:web:a2ca1d61757270d4d865a3",
	measurementId: "G-R2LPS8P03S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// You can also export the 'app' if you need it elsewhere
export default app;

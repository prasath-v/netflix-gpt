import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase"; // Import the auth instance from firebase.js
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BANNER_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
	const [signInUp, setSignInUp] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user);

	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const handleSignInUp = () => {
		// Handle sign up logic here
		setSignInUp(!signInUp);
	};

	const handleSubmit = async () => {
		const name = nameRef.current ? nameRef.current.value : "signin";
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		const message = signInUp
			? checkValidate(name, email, password)
			: checkValidate("signin", email, password);

		// Set error message if validation fails
		setErrorMessage(message);

		// If error message, return
		if (message) return;

		// If no error message
		if (signInUp) {
			// Handle sign up logic
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;

					updateProfile(auth.currentUser, {
						displayName: name,
						photoURL: USER_AVATAR,
					})
						.then(() => {
							console.log("From Signup: ", user);
							const { email, uid, displayName, photoURL } = auth.currentUser;
							// Update the user in the Redux store
							dispatch(addUser({ email, uid, displayName, photoURL }));
						})
						.catch((error) => {
							setErrorMessage("Error updating profile: " + error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " | " + errorMessage);
				});
		} else {
			// Handle sign in logic here
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log("From Signin: ", user);

					// Update the user in the Redux store
					const { email, uid, displayName, photoURL } = auth.currentUser;
					dispatch(addUser({ email, uid, displayName, photoURL }));
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + " | " + errorMessage);
				});
		}
	};

	return (
		<div className="bg-black">
			<Header />
			<img src={BANNER_IMG} alt="Netflix bg" className="opacity-50" />

			<div className="absolute top-0 left-0 right-0 mt-32 mx-auto flex justify-center">
				<form
					className="flex flex-col space-y-4 w-full max-w-96 bg-black/70 p-10 text-white"
					onSubmit={(e) => e.preventDefault()}
				>
					<h2 className="text-3xl font-bold mb-8">
						{signInUp ? "Sign Up" : "Sign In"}
					</h2>
					{signInUp && (
						<input
							ref={nameRef}
							type="text"
							placeholder="Enter your name"
							className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
						/>
					)}
					<input
						ref={emailRef}
						type="email"
						placeholder="Email or phone number"
						className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
					/>
					<input
						ref={passwordRef}
						type="password"
						placeholder="Password"
						className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
					/>
					{errorMessage && (
						<p className="text-red-600 text-sm font-medium">{errorMessage}</p>
					)}
					<button
						type="submit"
						className="bg-red-600 px-3 py-2 rounded w-full hover:bg-red-700 transition-colors cursor-pointer font-bold"
						onClick={() => handleSubmit()}
					>
						{signInUp ? "Sign Up" : "Sign In"}
					</button>
					<div className="text-gray-400 text-sm">
						{signInUp ? (
							<>
								{" "}
								Already have an account?{" "}
								<span
									className="text-white cursor-pointer"
									onClick={handleSignInUp}
								>
									Sign in
								</span>
							</>
						) : (
							<>
								New to Netflix?{" "}
								<span
									className="text-white cursor-pointer"
									onClick={handleSignInUp}
								>
									Sign up now
								</span>
							</>
						)}
					</div>
					<div className="text-gray-400 text-sm">
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot.
						<span className="text-white"> Learn more.</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

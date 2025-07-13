import { useState } from "react";

const Login = () => {
	const [signInUp, setSignInUp] = useState(false);

	const handleSignInUp = () => {
		// Handle sign up logic here
		setSignInUp(!signInUp);
	};

	return (
		<div className="bg-black">
			<img
				src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"
				alt="Netflix bg"
				className="opacity-50"
			/>

			<div className="absolute top-0 left-0 right-0 mt-32 mx-auto flex justify-center">
				<form className="flex flex-col space-y-4 w-full max-w-96 bg-black/70 p-10 text-white">
					<h2 className="text-3xl font-bold mb-8">
						{signInUp ? "Sign Up" : "Sign In"}
					</h2>
					{signInUp && (
						<input
							type="text"
							placeholder="Enter your name"
							className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
						/>
					)}
					<input
						type="email"
						placeholder="Email or phone number"
						className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
					/>
					<input
						type="password"
						placeholder="Password"
						className="bg-transparent w-full py-3 px-4 rounded border border-gray-400 placeholder:text-gray-400"
					/>
					<button
						type="submit"
						className="bg-red-600 px-3 py-2 rounded w-full hover:bg-red-700 transition-colors cursor-pointer font-bold"
					>
						Sign In
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

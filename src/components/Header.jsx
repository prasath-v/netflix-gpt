import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const userName = user?.displayName || "Guest";
	const userEmail = user?.email || null;
	const userAvatar = user?.photoURL || USER_AVATAR;
	// console.log("user in header: ", user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { email, uid, displayName, photoURL } = user;
				// console.log("user signed in with this email: ", user.email);
				dispatch(addUser({ email, uid, displayName, photoURL }));
				navigate("/browse");
			} else {
				// console.log("user signed out");
				dispatch(removeUser());
				navigate("/");
			}
		});

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	return (
		<div className="absolute top-0 left-0 right-0 z-10 max-w-[1160px] mx-auto flex items-center justify-between">
			<img src={LOGO} alt="Netflix Logo" className="h-20 w-auto" />

			{user && userName && (
				<div className="flex items-center gap-1 ml-auto mr-2.5 text-sm">
					<img src={userAvatar} className="w-8 h-8" />
					Welcome, {userName}!
				</div>
			)}

			{userEmail && (
				<button
					onClick={() => handleSignOut()}
					className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors font-semibold text-sm"
				>
					SignOut
				</button>
			)}
		</div>
	);
};

export default Header;

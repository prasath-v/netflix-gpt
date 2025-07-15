export const checkValidate = (name, email, password) => {
	let isNameValid = false;
	if (name != "signin") {
		const isNameRegex = /^[a-zA-Z\s'-]{2,50}$/;
		isNameValid = isNameRegex.test(name);

		if (!isNameValid)
			return "Name must be 2–50 characters long and contain only letters, spaces, hyphens, or apostrophes.";
	}

	if (!email || !password) {
		return "Email and Password are required.";
	}

	const isEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
	const isEmailValid = isEmailRegex.test(email);

	/* This regex pattern enforces the following password requirements:
    - At least one lowercase letter ([a-z])
    - At least one uppercase letter ([A-Z])
    - At least one digit (\d)
    - At least one special character ([@$!%*?&])
    - Minimum length of 8 characters */

	const isPasswordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	const isPasswordValid = isPasswordRegex.test(password);

	// if Email or Password is not valid
	if (!isEmailValid) return "Email is not valid.";
	if (!isPasswordValid)
		return "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character.";

	// if Email & Password are valid
	return null;
};

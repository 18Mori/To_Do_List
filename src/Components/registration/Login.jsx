import { useState } from "react";
// Make sure to import your Firebase auth functions if they are in a separate file
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "./firebase-config"; // Example path to your firebase config

const Login = ({ setUser, setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userCredential;
      // This is a placeholder for your actual Firebase auth logic
      // if (isNewUser) {
      //   // Create account
      //   userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // } else {
      //   // Sign in
      //   userCredential = await signInWithEmailAndPassword(auth, email, password);
      // }
      // setUser(userCredential.user);
      // setUserRole(role);

      // Dummy logic for demonstration without Firebase connected
      console.log("Form Submitted", { email, password, role, isNewUser });
      alert(`Successfully submitted as ${isNewUser ? 'Sign Up' : 'Login'}`);

    } catch (error) {
      console.error("Error during authentication", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isNewUser ? "Create an Account" : "Log In to Your Account"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password"className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isNewUser ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* Toggle between Login and Sign Up */}
        <p className="text-sm text-center text-gray-600">
          {isNewUser ? "Already have an account?" : "New user?"}{" "}
          <button
            onClick={() => setIsNewUser(!isNewUser)}
            className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none"
          >
            {isNewUser ? "Login here" : "Sign Up now"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
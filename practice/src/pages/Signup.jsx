import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "../App.css";
import { Link } from "react-router-dom";


function Signup() {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        inputFields.email,
        inputFields.password
      );
      alert("Signup Successful 🎉");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Signup Successful ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={inputFields.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={inputFields.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={inputFields.password}
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>
        </form>

        <button className="google-btn" onClick={handleGoogleSignup}>
          Continue with Google
        </button>
        <p className="switch-text">
  Already have an account?{" "}
  <Link to="/login">Sign In</Link>
</p>

      </div>
    </div>
  );
}

export default Signup;

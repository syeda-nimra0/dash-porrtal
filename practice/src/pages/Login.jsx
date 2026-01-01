import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import "../App.css";
import { Link } from "react-router-dom";


function Login() {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        inputFields.email,
        inputFields.password
      );
      alert("Login Successful ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Successful ✅");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h2>Sign In</h2>

        <form onSubmit={handleLogin}>
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

          <button type="submit">Login</button>
        </form>

        <button className="google-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>

        <p className="switch-text">
  Don’t have an account?{" "}
  <Link to="/signup">Sign Up</Link>
</p>

      </div>
    </div>
  );
}

export default Login;

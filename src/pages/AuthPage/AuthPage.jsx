import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/fvLogo3.png";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div className="auth-component">
        <img
          src={logo}
          alt=""
          style={{ width: "100%" }}
          className="auth-logo"
        />
      </div>
      <div className="auth-page">
        <button onClick={() => setShowSignUp(!showSignUp)}>
          {showSignUp ? "Log In" : "Sign Up"}
        </button>
        {showSignUp ? (
          <SignUpForm setUser={setUser} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </div>
      <Footer />
    </>
  );
}

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { useState } from "react";

const Header = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openLogIn = () => {
    setShowLogIn(true);
  };
  const openSignUp = () => {
    setShowSignUp(true);
  };
  const closeLogIn = () => {
    setShowLogIn(false);
  };

  const closeSignUp = () => {
    setShowSignUp(false);
  };

  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={openLogIn}
            className="hover:text-violet-900 transition"
          >
            Log in
          </button>
          <LogIn showLogIn={showLogIn} closeLogIn={closeLogIn} />
          <button
            onClick={openSignUp}
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            Sign up
          </button>
          <SignUp showSignUp={showSignUp} closeSignUp={closeSignUp} />
        </div>
      </div>
    </header>
  );
};

export default Header;

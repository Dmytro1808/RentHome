import React, { useState } from "react";

const LogIn = ({ showLogIn, closeLogIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Сохранение данных в Local Storage
    localStorage.setItem("LogInUser", JSON.stringify({ email, password }));
    setEmail("");
    setPassword("");
    closeLogIn();
  };
  return (
    <>
      {showLogIn && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-9 rounded-lg relative w-70">
            <button
              onClick={closeLogIn}
              className="absolute right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl mb-4 text-center font-bold">Log in</h2>
            <form className="text-center" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="text-start block mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-400 p-2 rounded-md w-full"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="text-start block mb-2">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-400 p-2 rounded-md w-full"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-800 text-white px-12 py-2 rounded-lg transition mt-3"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default LogIn;

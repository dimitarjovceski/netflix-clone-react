import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const { user, logIn } = UserAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c732cb00-be61-4d64-b8c3-99f022e7a123/83226e29-d082-49eb-9bb2-e59b706a675c/MK-en-20220620-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="/"
        />
        <div className="bg-black/70 top-0 left-0 fixed w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] bg-black/80 mx-auto text-white">
            <div className="max-w-[370px] mx-auto p-16">
              <h1 className="text-3xl font-bold">Login</h1>
              {error ? <p className="bg-red-600 text-white">{error}</p> : null}
              <form
                onSubmit={handleLogin}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 p-3 my-2 rounded"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-700 p-3 my-2 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 my-6 py-3 ">Login</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me?
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-4 text-sm text-white">
                  <span className="mr-2">New to Netflix?</span>
                  <Link to="/signup">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

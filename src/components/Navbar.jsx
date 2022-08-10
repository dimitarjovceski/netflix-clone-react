import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleEvent = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-5xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer  ">
              Account
            </button>
          </Link>
          <button
            onClick={handleEvent}
            className="bg-red-600 rounded text-white cursor-pointer px-4 py-2 "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/signup">
            <button className="text-white pr-4 cursor-pointer ">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="bg-red-600 rounded text-white cursor-pointer px-4 py-2">
              Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

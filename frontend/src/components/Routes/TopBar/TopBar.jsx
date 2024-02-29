import { useState, useEffect } from "react";
import "./TopBar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../context/auth";

const TopBar = () => {
  const [auth,setAuth] = useAuth();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (auth && auth.user) {
      setUserId(auth.user); // Set the entire user object
    }
  }, [auth]);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully!")
  };

  return (
    <div className="topbar bg-[#2AAA8A]">
      <div className="container">
        <div className="flex justify-between items-center w-full py-3">
          <div className="flex items-center">
            <img
              src="src\components\TopBar\logo.png"
              className="mr-2 h-[80px] cursor-pointer w-full"
              alt=""
            />
          </div>

          <div className="flex gap-4">
            {auth?.user ? (
              <>
                <div className="px-5 py-2 bg-white rounded-lg">
                  {userId && <span>{userId.name}</span>}
                </div>
                <div className="px-5 py-2 bg-white rounded-lg">
                  <Link onClick={handleLogout} to="/">Logout</Link>
                </div>
              </>
            ) : (
              <>
                <Link className="px-5 py-2 bg-white rounded-lg" to="/login">
                  Login
                </Link>
                <Link className="px-5 py-2 bg-white rounded-lg" to="/signup">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

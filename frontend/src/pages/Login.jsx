import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Get authentication state and setAuth function from context
  const [auth, setAuth] = useAuth();

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login/",
        loginData
      );
      if (res && res.data.success) {
        // Update authentication state upon successful login
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate( "/user-dashboard/user");
      } else {
        console.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="w-full max-container padding-container h-screen flex justify-center items-center  ">
      <div className=" h-[500px] w-[1000px] flex justify-center items-center border-[1px]">
        <div className="bg-[#2AAA8A] w-[500px] h-full flex flex-col justify-center items-center">
          <h1 className="p-4 text-center text-white bold-20">
            Welcome friend <br />
            Login to your account!
          </h1>
          <span className="regular-14 text-white ">
            Create a new account{" "}
            <Link className="regular-14 text-blue-600" to="/signup">
              Sign up
            </Link>
          </span>
        </div>
        <div className="w-[500px] flex flex-col justify-center items-center">
          <h2 className="p-3 bold-32 text-[#2AAA8A]">Login Here</h2>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleLogin}
          >
            <input
              type="text"
              name="email"
              className="py-2 px-6 border border-gray-300 "
              placeholder="Enter your email."
              onChange={handleChange}
            />
            <input
              type="password" // Changed type to password
              name="password"
              className="py-2 px-6 border border-gray-300 "
              placeholder="Enter your password."
              onChange={handleChange} // Changed to handlePasswordChange
            />
            <button
              type="submit"
              className="py-2 px-6 bg-[#2AAA8A] text-white border border-transparent hover:border-[#2AAA8A]  hover:bg-transparent transition ease-in-out duration-300 hover:text-[#2AAA8A]"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

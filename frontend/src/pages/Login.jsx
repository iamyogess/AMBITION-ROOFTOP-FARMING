import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setLogin((prev) => ({ ...prev, email: value }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setLogin((prev) => ({ ...prev, password: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        login
      );
      if (res.data.success === true) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
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
              className="py-2 px-6 border border-gray-300 "
              placeholder="Enter your email."
              onChange={handleEmailChange}
            />
            <input
              type="password" // Changed type to password
              className="py-2 px-6 border border-gray-300 "
              placeholder="Enter your password."
              onChange={handlePasswordChange} // Changed to handlePasswordChange
            />
            <button type="submit" className="py-2 px-6 bg-[#2AAA8A] text-white border border-transparent hover:border-[#2AAA8A]  hover:bg-transparent transition ease-in-out duration-300 hover:text-[#2AAA8A]">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

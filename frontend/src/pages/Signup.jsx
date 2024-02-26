import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    houseNo: "",
    wardNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        register
      );
      if (res.data.success === true) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="w-full max-container padding-container h-screen flex justify-center items-center">
      <div className="h-[500px] w-[1000px] flex justify-center items-center border-[1px]">
        <div className="bg-[#2AAA8A] w-[500px] h-full flex flex-col justify-center items-center">
          <h1 className="p-4 text-center text-white bold-20">
            Hello friends <br />
            Let's create a new account!
          </h1>
          <span className="regular-16 text-white">
            Already Registered?{" "}
            <Link className="regular-14 text-blue-600" to="/login">
              Login
            </Link>
          </span>
        </div>
        <div className="w-[500px] flex flex-col justify-center items-center">
          <h2 className="p-3 bold-32 text-[#2AAA8A]">Sign up Here</h2>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleRegister}
          >
            <input
              type="text"
              className="py-2 px-6 border border-gray-300"
              placeholder="Enter your full name."
              name="fullName"
              onChange={handleChange}
            />
            <input
              type="email"
              className="py-2 px-6 border border-gray-300"
              placeholder="Enter your email."
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className="py-2 px-6 border border-gray-300"
              placeholder="Enter your password."
              name="password"
              onChange={handleChange}
            />
            <input
              type="password"
              className="py-2 px-6 border border-gray-300"
              placeholder="Confirm Password."
              name="confirmPassword"
              onChange={handleChange}
            />
            <input
              type="number"
              min="1"
              className="py-2 px-6 border border-gray-300"
              placeholder="Enter your house number."
              name="houseNo"
              onChange={handleChange}
            />
            <input
              type="number"
              min="1"
              className="py-2 px-6 border border-gray-300"
              placeholder="Enter your ward number."
              name="wardNo"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="py-2 px-6 bg-[#2AAA8A] text-white border border-transparent hover:border-[#2AAA8A]  hover:bg-transparent transition ease-in-out duration-300 hover:text-[#2AAA8A]"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API_URLS from "../../config/api";

function Login({ setIsLoggedIn }) {

  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    userName: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_URLS.LOGIN, loginData
      );

      if (response.data.message === "Login Successful") {
        toast.success("Login Successful... Redirecting to Home Page");
        localStorage.setItem("userName", loginData.userName);
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/");
      } else {
        toast.error("Invalid Username or Password");
      }
    } catch (error) {
      console.error("Login Error:", error);
      if(error.response && error.response.status === 401) {
        toast.info("Invalid Username or Password");
      } else {
        toast.error("Server Error. Please try again later.");
      }
    
    }
  };

  return (
    <div className="w-full overflow-x-hidden pb-20">

      <h1 className="text-center text-white text-2xl md:text-3xl
                      font-bold tracking-wide py-8">
        Login to Green Studio
      </h1>
     
      <div className="flex justify-center items-center px-4 pb-10">
       
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-sm md:max-w-md
                     rounded-2xl shadow-2xl p-8 md:p-10"
        >

          <div className="text-center mb-6">
            <div className="text-5xl mb-3"></div>
            <h2 className="text-xl font-bold text-gray-800">Welcome Back</h2>
            <p className="text-sm text-gray-500 mt-1">
              Sign in to your Green Studio account
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
               
              </span>
              <input
                type="email"
                name="userName"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2
                           border-2 border-gray-300
                           rounded-lg text-sm outline-none
                           focus:border-green-500
                           focus:ring-2 focus:ring-green-200
                           transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 font-semibold text-sm mb-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
               
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-2
                           border-2 border-gray-300
                           rounded-lg text-sm outline-none
                           focus:border-green-500
                           focus:ring-2 focus:ring-green-200
                           transition-all duration-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2
                           text-gray-400 hover:text-gray-600
                           text-sm transition-all"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="text-right mb-6">
            
             <a href="/ForgetPass"
              className="text-green-600 hover:text-green-800
                         text-xs font-semibold transition-all"
              style={{ textDecoration: "none" }}
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700
                       text-white font-bold py-3 rounded-lg
                       transition-all duration-300
                       hover:-translate-y-1
                       shadow-md hover:shadow-lg
                       text-sm tracking-wide"
          >
            Login
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-xs">OR</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/Register")}
              className="text-green-600 hover:text-green-800
                         font-semibold cursor-pointer transition-all"
            >
              Register here
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
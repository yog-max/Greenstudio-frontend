import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import API_URLS from "../../config/api";

function Register() {

  const [user, setUser] = useState({
    userName: "",
    password: "",
    mobileNo: "",
    gender: ""
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
  setConfirmPassword(e.target.value);
  if (e.target.value === user.password) {
    setPasswordMatch(true);
  } else {
    setPasswordMatch(false);
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.mobileNo.toString().length !== 10) {
  toast.error("Mobile number must be exactly 10 digits.");
  return;
  }

if (!passwordMatch) {
  toast.error("Passwords do not match.");
  return;
}
    try {
      await axios.post(API_URLS.REGISTER, user);
      toast.success("Registered successfully...");
      setUser({ userName: "", password: "", mobileNo: "", gender: "" });
      setConfirmPassword("");
      setPasswordMatch(null);
    } catch (error) {
      toast.error("Registration Failed. Please try again.");
    }
  };

  return (
    <div className="w-full overflow-x-hidden pb-20">
    
      <h1 className="text-center text-white text-2xl md:text-3xl
                      font-bold tracking-wide py-8">
        Register with Green Studio
      </h1>

      <div className="flex justify-center items-center px-4 pb-10">

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-sm md:max-w-md
                     rounded-2xl shadow-2xl p-8 md:p-10"
        >

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              placeholder="Enter username"
              required
              className="w-full px-4 py-2 border-2 border-gray-400
              rounded-lg text-sm outline-none
              focus:border-green-600
              focus:ring-2 focus:ring-green-300
              transition-all duration-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
             className="w-full px-4 py-2 border-2 border-gray-400
           rounded-lg text-sm outline-none
           focus:border-green-600
           focus:ring-2 focus:ring-green-300
           transition-all duration-300"
            />
          </div>

  <div className="mb-4">
  <label className="block text-gray-700 font-semibold text-sm mb-1">
    Confirm Password
  </label>
  <input
    type="password"
    value={confirmPassword}
    onChange={handleConfirmPassword}
    placeholder="Re-enter your password"
    required
    className="w-full px-4 py-2 border-2 border-gray-400
               rounded-lg text-sm outline-none
               focus:border-green-600
               focus:ring-2 focus:ring-green-300
               transition-all duration-300"
  />
       {confirmPassword.length > 0 && (
      <p className={`text-xs mt-1 font-semibold
                  ${passwordMatch ? "text-green-600" : "text-red-500"}`}>
      {passwordMatch ? " Password matched" : " Password not matched"}
      </p>
  )}
  </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold text-sm mb-1">
              Mobile No
            </label>
            <input
              type="number"
              name="mobileNo"
              value={user.mobileNo}
              onChange={handleChange}
              placeholder="Enter mobile number"
              required
           className="w-full px-4 py-2 border-2 border-gray-400
           rounded-lg text-sm outline-none
           focus:border-green-600
           focus:ring-2 focus:ring-green-300
           transition-all duration-300"
            />
            {user.mobileNo.toString().length > 0 &&
            user.mobileNo.toString().length !== 10 && (
             <p className="text-xs mt-1 font-semibold text-red-500">
            Mobile number must be exactly 10 digits
          </p>
          )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold text-sm mb-2">
              Gender
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={user.gender === "male"}
                  className="accent-green-600 w-4 h-4"
                />
                Male
              </label>
              <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={user.gender === "female"}
                  className="accent-green-600 w-4 h-4"
                />
                Female
              </label>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700
                         text-white font-semibold py-2 rounded-lg
                         transition-all duration-300 hover:-translate-y-1
                         shadow-md hover:shadow-lg"
            >
              Register
            </button>
            <button
              type="reset"
             onClick={() => {
          setUser({ userName: "", password: "", mobileNo: "", gender: "" });
          setConfirmPassword("");      
          setPasswordMatch(null);    
          }}
              
              className="flex-1 bg-red-500 hover:bg-red-600
                         text-white font-semibold py-2 rounded-lg
                         transition-all duration-300 hover:-translate-y-1
                         shadow-md hover:shadow-lg"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Register;
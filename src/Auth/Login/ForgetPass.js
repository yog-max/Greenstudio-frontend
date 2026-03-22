import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import API_URLS from "../../config/api";

function ForgetPass() {

    const[formData, setFormData] = useState({
        userName: "",
    });
    const[password, setPassword] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
   const  handleSubmit = async (e) => {
        e.preventDefault();
       
       try{
        const response = await axios.patch(API_URLS.FORGET_PASSWORD(formData.userName),
             {password: password });
      
        if(response.data === "password modified successfully"){
            toast.success("Password reset successful. Please check your email for the new password.");
        } else {
            toast.error("Error resetting password. Please try again.");
            console.error("Error Response:", response.data);
        }
       }
       catch(error)
       { 
        toast.error("Server Error. Please try again later.");
       }
    };


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md 
        transition-all duration-500 ease-in-out transform hover:scale-105 ">
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
                <label className="block text-gray-700 font-semibold text-sm mb-1 mt-4">
                    New Password
                </label>
                <input  
                    type="password"
                    name="password"
                    placeholder="Enter new password"        
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2
                               border-2 border-gray-300
                                 rounded-lg text-sm outline-none
                                 focus:border-green-500
                                    focus:ring-2 focus:ring-green-200
                                 transition-all duration-300"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-500 text-white py-2 rounded-lg mt-6 hover:bg-green-600 transition-colors duration-300"
                >
                    Reset Password
                </button>
              

            </div>
        </div>
    );
}

export default ForgetPass;

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API_URLS from "../../config/api";


function AdminLogin() {

    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading]   = useState(false); 

  const navigate = useNavigate(); 
  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true); 

    try {
     
      const res = await axios.post(API_URLS.ADMIN_LOGIN, {
        userName: userName,
        password: password,
      });

     
      sessionStorage.setItem("adminToken", res.data.token);

      toast.success("Welcome Admin! 🎉");
      navigate("/Admin"); 

    } catch (error) {
        if(error.response && error.response.status === 401) {
            toast.error(" Invalid username or password!");
        } else {
            toast.error("Server error. Please try again later.");
        }
     
    } finally {
      setLoading(false); 
    }
  }

    return (
     
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-cyan-900 mb-2">
          🛠️ Admin Login
        </h2>
        <p className="text-center text-gray-400 text-sm mb-8">
          Green Studio — Admin Panel
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">

          <div>
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter admin username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 mb-1 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-cyan-400 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-bold
                       py-3 rounded-lg transition-all duration-300 hover:scale-105
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "🔐 Login"}
          </button>

        </form>
      </div>
    </div>
  );

   
}
export default AdminLogin;
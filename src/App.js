import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Menu from './Components/Menu';
import Footer from './Components/Footer';
import ProtectedRoute from './Components/ProtectedRoute';

import Home from './Pages/Home/Home';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import ForgetPass from './Auth/Login/ForgetPass';
import About from './Pages/About/About';
import Recentphotoshot from './Pages/Photograph/Recentphotoshot';
import Booking from './Pages/Booking/Booking';
import UserProfile from './Pages/Profile/UserProfile';
import Admin from './Pages/Admin/Admin';
import AdminLogin from './Pages/Admin/AdminLogin';

// ── AppLayout — inside BrowserRouter ──
// useLocation only works inside BrowserRouter
function AppLayout({ isLoggedIn, setIsLoggedIn }) {

    const location = useLocation();

    // hide Menu + Footer on these pages
    const hideMenuPaths = ["/Admin"];
    const shouldHideMenu = hideMenuPaths.includes(location.pathname);

    return (
        <>
            {!shouldHideMenu && <Menu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}

            <Routes>
                <Route path="/"                element={<Home isLoggedIn={isLoggedIn} />} />
                <Route path="/Register"        element={<Register />} />
                <Route path="/login"           element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/ForgetPass"      element={<ForgetPass />} />
                <Route path="/about"           element={<About />} />
                <Route path="/Recentphotoshot" element={<Recentphotoshot />} />
                <Route path="/Booking"         element={<Booking />} />
                <Route path="/UserProfile"     element={<UserProfile />} />
                <Route path="/Admin-Login"     element={<AdminLogin />} />
                <Route path="/Admin"           element={<ProtectedRoute><Admin /></ProtectedRoute>} />
            </Routes>

            {!shouldHideMenu && <Footer setIsLoggedIn={setIsLoggedIn} />}
        </>
    );
}

// ── Main App ──
function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            <BrowserRouter>
                <AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </BrowserRouter>

            <ToastContainer position="top-right" autoClose={3000}
                hideProgressBar={false} newestOnTop closeOnClick
                pauseOnHover draggable theme="colored"
                style={{ top: "100px" }} />
        </div>
    );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Menu({ isLoggedIn, setIsLoggedIn }) {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // ── Close when clicking outside ──
    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setMenuOpen(false);
        toast.info("Logged out successfully!", {
            position: "top-right",
            autoClose: 2000,
            theme: "colored"
        });
        setTimeout(() => { setIsLoggedIn(false); navigate("/"); }, 500);
    };

    // ── SVG Icons — white small logos ──
    // Each icon matches the menu item like your reference image

    const HomeIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    );

    const RegisterIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const GalleryIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
    );

    const BookIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
        </svg>
    );

    const AboutIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    );

    const AdminIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
        </svg>
    );

    const LoginIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
        </svg>
    );

    const LogoutIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
        </svg>
    );

    const ProfileIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const EventIcon = () => (
        <svg width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-7-7H7v5h5v-5z" />
        </svg>
    );

    // ── Reusable menu item style ──
    const itemStyle = `
        flex items-center gap-3 px-5 py-3
        font-semibold text-[15px] text-white
        hover:bg-teal-700
        transition-all duration-200
        border-b border-teal-600
        cursor-pointer w-full text-left
        no-underline
    `;

    return (
        <>
            {/* ══════════════════════════
                NAVBAR
            ══════════════════════════ */}
            <div
                className="fixed top-0 left-0 w-full h-[70px] z-[1000]
                           flex justify-between items-center px-[30px]
                           bg-cover bg-center shadow-lg"
                style={{ backgroundImage: "url('/Assests/Images/Title_image.png')" }}
            >

                {/* LOGO */}
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img
                        src="/Assests/Images/Studio_logo.png"
                        alt="logo"
                        className="h-[50px] w-[230px] rounded-[8px]
                                   hover:opacity-90 transition-opacity duration-200"
                    />
                </Link>

                {/* ══════════════════════════
                    HAMBURGER + DROPDOWN
                    Works on ALL devices!
                ══════════════════════════ */}
                <div className="relative" ref={menuRef}>

                    {/* ORANGE HAMBURGER BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col justify-center items-center
                                   gap-[5px] rounded-lg cursor-pointer
                                   bg-orange-500 hover:bg-orange-600
                                   border-none
                                   transition-all duration-300
                                   hover:scale-110 hover:shadow-lg
                                   w-[45px] h-[45px]"
                        aria-label="Menu"
                    >
                        {/* Line 1 — rotates to \ */}
                        <span className={`block w-[22px] h-[3px] bg-white
                                          rounded transition-all duration-300
                                          ${menuOpen
                                            ? "rotate-45 translate-y-[8px]"
                                            : ""}`}
                        />
                        {/* Line 2 — fades out */}
                        <span className={`block w-[22px] h-[3px] bg-white
                                          rounded transition-all duration-300
                                          ${menuOpen
                                            ? "opacity-0 scale-x-0"
                                            : "opacity-100"}`}
                        />
                        {/* Line 3 — rotates to / */}
                        <span className={`block w-[22px] h-[3px] bg-white
                                          rounded transition-all duration-300
                                          ${menuOpen
                                            ? "-rotate-45 -translate-y-[8px]"
                                            : ""}`}
                        />
                    </button>

                    {/* ══════════════════════════
                        DROPDOWN MENU CARD
                        slides from top right
                    ══════════════════════════ */}
                    {menuOpen && (
                        <div
                            className="absolute top-[55px] right-0
                                       w-[260px] bg-teal-800
                                       rounded-2xl shadow-2xl
                                       overflow-hidden z-[9999]
                                       border border-teal-600"
                            style={{
                                animation: "slideDown 0.25s ease-out"
                            }}
                        >

                            {/* DROPDOWN HEADER */}
                            <div className="bg-teal-900 px-5 py-4
                                            border-b border-teal-600">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full
                                                    bg-orange-500
                                                    flex items-center
                                                    justify-center
                                                    text-white font-bold
                                                    text-[18px]">
                                        {isLoggedIn
                                            ? (localStorage.getItem("userName") || "U")[0].toUpperCase()
                                            : "G"}
                                    </div>
                                    <div>
                                        <p className="text-white font-bold
                                                      text-[15px] leading-tight">
                                            {isLoggedIn
                                                ? localStorage.getItem("userName") || "User"
                                                : "Green Studio"}
                                        </p>
                                        <p className="text-teal-300 text-[12px]">
                                            {isLoggedIn
                                                ? "Welcome back! "
                                                : "Photography Studio "}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* MENU ITEMS LIST */}
                            <ul className="list-none m-0 p-0">

                                {/* Home — always visible */}
                                <li>
                                    <Link
                                        to="/"
                                        onClick={() => setMenuOpen(false)}
                                        className={itemStyle}
                                    >
                                        <HomeIcon />
                                        Home
                                    </Link>
                                </li>

                                {/* ── BEFORE LOGIN ── */}
                                {!isLoggedIn && (<>

                                    <li>
                                        <Link
                                            to="/Register"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <RegisterIcon />
                                            Register
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/Recentphotoshot"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <GalleryIcon />
                                            Latest Gallery
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            onClick={() => {
                                                setMenuOpen(false);
                                                toast.warning("Please register to book!");
                                                setTimeout(() => navigate("/Register"), 1500);
                                            }}
                                            className={itemStyle}
                                        >
                                            <BookIcon />
                                            Book Now
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/about"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <AboutIcon />
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/Admin-Login"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <AdminIcon />
                                            Admin
                                        </Link>
                                    </li>

                                    {/* LOGIN — green */}
                                    <li className="p-3">
                                        <Link
                                            to="/login"
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center
                                                       justify-center gap-2
                                                       no-underline text-white
                                                       font-bold text-[15px]
                                                       bg-green-500
                                                       hover:bg-green-600
                                                       rounded-xl py-3 px-4
                                                       transition-all duration-300
                                                       hover:scale-105
                                                       shadow-md"
                                        >
                                            <LoginIcon />
                                            Login
                                        </Link>
                                    </li>

                                </>)}

                                {/* ── AFTER LOGIN ── */}
                                {isLoggedIn && (<>

                                    <li>
                                        <Link
                                            to="/Booking"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <EventIcon />
                                            Book Event
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/Recentphotoshot"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <GalleryIcon />
                                            Recent Gallery
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/UserProfile"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <ProfileIcon />
                                            My Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/about"
                                            onClick={() => setMenuOpen(false)}
                                            className={itemStyle}
                                        >
                                            <AboutIcon />
                                            About
                                        </Link>
                                    </li>

                                    {/* LOGOUT — red */}
                                    <li className="p-3">
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center
                                                       justify-center gap-2
                                                       w-full text-white
                                                       font-bold text-[15px]
                                                       bg-red-500
                                                       hover:bg-red-600
                                                       rounded-xl py-3 px-4
                                                       cursor-pointer
                                                       border-none
                                                       transition-all duration-300
                                                       hover:scale-105
                                                       shadow-md"
                                        >
                                            <LogoutIcon />
                                            Logout
                                        </button>
                                    </li>

                                </>)}

                            </ul>

                        </div>
                    )}

                </div>

            </div>

            {/* Slide down animation */}
            <style>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-15px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>

            {/* Spacer */}
            <div className="h-[70px]" />
        </>
    );
}

export default Menu;
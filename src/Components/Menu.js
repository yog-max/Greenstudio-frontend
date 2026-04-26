import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Menu({ isLoggedIn, setIsLoggedIn }) {

    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);
    const handleLogout = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        setMenuOpen(false);
        toast.info("Logged out successfully!", { position: "top-right", autoClose: 2000, theme: "colored" });
        setTimeout(() => { setIsLoggedIn(false); navigate("/"); }, 500);
    };

    const HomeIcon = () => (
        <svg className="shrink-0" width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
    );

    const RegisterIcon = () => (
        <svg className="shrink-0" 
        width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const GalleryIcon = () => (
        <svg className="shrink-0"
         width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
        </svg>
    );

    const BookIcon = () => (
        <svg className="shrink-0" 
        width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
        </svg>
    );

    const AboutIcon = () => (
        <svg className="shrink-0"
         width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
    );

    const AdminIcon = () => (
        <svg className="shrink-0"
         width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
        </svg>
    );

    const LoginIcon = () => (
        <svg  className="shrink-0"
        width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5zm9 12h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-8v2h8v14z" />
        </svg>
    );

    const LogoutIcon = () => (
        <svg className="shrink-0"
        width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
        </svg>
    );

    const ProfileIcon = () => (
        <svg className="shrink-0"
         width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
    );

    const EventIcon = () => (
        <svg className="shrink-0"
         width="20" height="20" viewBox="0 0 24 24"
            fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-7-7H7v5h5v-5z" />
        </svg>
    );

    // ── reusable link style ──
    const linkStyle = "no-underline text-white font-bold text-[18px] hover:text-[#4a9aef] transition-colors duration-200";
    const mobileStyle = "flex items-center gap-3 px-5 py-3 font-semibold text-[15px] text-white hover:bg-teal-700 transition-all duration-200 border-b border-teal-600 cursor-pointer w-full text-left no-underline";

    return (
        <>
            {/* NAVBAR */}
            <div
                className="fixed top-0 left-0 w-full h-[70px] z-[1000]
                           flex justify-between items-center px-[30px]
                           bg-cover bg-center"
                style={{ backgroundImage: "url('/Assests/Images/Title_image.png')" }}
            >
                {/* LOGO */}
                <img src="/Assests/Images/Studio_logo.png" alt="logo"
                    className="h-[50px] w-[230px] rounded-[8px]" />

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-3">

                    <Link className={linkStyle} to="/"><li className="list-none">Home</li></Link>

                    {/* BEFORE LOGIN */}
                    {!isLoggedIn && (<>
                        <Link className={linkStyle} to="/Register"><li className="list-none">Register</li></Link>
                        <Link className={linkStyle} to="/Recentphotoshot"><li className="list-none">Latest Gallery</li></Link>
                        <Link className={linkStyle} onClick={() => { toast.warning("Please register first."); setTimeout(() => navigate("/Register"), 1500); }}>
                            <li className="list-none">Book now</li>
                        </Link>
                        
                        <Link className={linkStyle} to="/about"><li className="list-none">About</li></Link>

                      
                        <Link className={linkStyle} to="/Admin-Login"><li className="list-none">Admin</li></Link>

                        <Link className="no-underline text-white font-bold text-[18px] bg-[rgb(7,175,7)] hover:bg-[rgb(13,153,13)] rounded-[8px] w-[90px] h-[33px] flex items-center justify-center transition-colors duration-200"
                            to="/login"><li className="list-none">Login</li>
                        </Link>

                       
                        
                    </>)}

                    {/* AFTER LOGIN */}
                    {isLoggedIn && (<>
                        <Link className={linkStyle} to="/Booking"><li className="list-none">Book Event</li></Link>
                        <Link className={linkStyle} to="/Recentphotoshot"><li className="list-none">Recent Gallery</li></Link>
                        <Link className={linkStyle} to="/UserProfile"><li className="list-none">MyProfile</li></Link>
                        <Link className={linkStyle} to="/about"><li className="list-none">About</li></Link>

                        {/* LOGOUT — red */}
                        <li className="list-none text-white font-bold text-[18px] cursor-pointer bg-[rgb(216,39,16)] hover:bg-[rgb(201,7,7)] rounded-[8px] w-[90px] h-[33px] flex items-center justify-center transition-colors duration-200"
                            onClick={handleLogout}>Logout
                        </li>
                    </>)}

                </div>

                {/* HAMBURGER — mobile only */}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-[5px]  w-[45px] h-[45px] rounded-lg bg-orange-500 hover:bg-orange-600 border-none cursor-pointer">
                    <span className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
                    <span className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block w-6 h-[3px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
                </button>

            </div>

            {/* MOBILE DROPDOWN */}
            {menuOpen && (
            <div
             className="fixed inset-0 z-[998] bg-black/40 md:hidden"
            onClick={closeMenu}
             >  
             </div>
             
            )}            
            <div className={`fixed top-[70px] right-8 w-[250px] z-[999] backdrop-blur-md bg-[#0a2540]/75 flex flex-col transition-all rounded-xl duration-300 overflow-hidden md:hidden ${menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}`}>
            <div className=" px-5 py-4
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
                <ul className="flex flex-col px-6 list-none m-0 p-0">

                    <li className="border-b border-gray-700">
                        <Link to="/" onClick={() => setMenuOpen(false)} className={mobileStyle}><HomeIcon/> Home</Link>
                    </li>

                    {/* MOBILE BEFORE LOGIN */}
                    {!isLoggedIn && (<>
                        <li className="border-b border-gray-700">
                            <Link to="/Register" onClick={() => setMenuOpen(false)} className={mobileStyle}><RegisterIcon/>Register</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link to="/Recentphotoshot" onClick={() => setMenuOpen(false)} className={mobileStyle}><GalleryIcon/>Latest Gallery</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link onClick={() => { setMenuOpen(false); toast.warning("Please register first."); setTimeout(() => navigate("/Register"), 1500); }} className={mobileStyle}><BookIcon/>Book Now</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link to="/about" onClick={() => setMenuOpen(false)} className={mobileStyle}><AboutIcon/>About</Link>
                        </li>

                        <li className="border-b border-gray-700">
                            <Link to="/Admin-Login" onClick={() => setMenuOpen(false)} className={mobileStyle}><AdminIcon/>Admin</Link>
                        </li>

                        {/* Mobile Login — green */}
                        <li className="pt-3">
                            <Link to="/login" onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-center gap-2 no-underline text-center text-white font-bold text-[18px] bg-[rgb(7,175,7)] hover:bg-[rgb(7, 132, 7)] rounded-[8px] mx-4 my-2 py-2 transition-colors duration-200">
                              <LoginIcon/>  Login
                            </Link>
                        </li>
                    </>)}

                    {/* MOBILE AFTER LOGIN */}
                    {isLoggedIn && (<>
                        <li className="border-b border-gray-700">
                            <Link to="/Booking" onClick={() => setMenuOpen(false)} className={mobileStyle}><BookIcon/>Book Event</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link to="/Recentphotoshot" onClick={() => setMenuOpen(false)} className={mobileStyle}><EventIcon/>Recent Gallery</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link to="/UserProfile" onClick={() => setMenuOpen(false)} className={mobileStyle}><ProfileIcon/>MyProfile</Link>
                        </li>
                        <li className="border-b border-gray-700">
                            <Link to="/about" onClick={() => setMenuOpen(false)} className={mobileStyle}><AboutIcon/>About</Link>
                        </li>
                        {/* Mobile Logout — red */}
                        <li className="pt-3">
                            <button onClick={handleLogout}
                                className="flex items-center justify-center gap-2 w-[90%] mx-auto text-center text-white font-bold text-[18px] bg-[rgb(216,39,16)] hover:bg-[rgb(141,9,9)] rounded-[8px] my-2 py-2 transition-colors duration-200">
                              <LogoutIcon/>  Logout
                            </button>
                        </li>
                    </>)}

                </ul>
            </div>

            <div className="h-[70px]" />
        </>
    );
}

export default Menu;
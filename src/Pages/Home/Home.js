import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home({ isLoggedIn }) {

  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const target = 82412;
  const target2 = 2483;
  const target3 = 948;

  useEffect(() => {
    let start = 0;
    let start2 = 0;
    let start3 = 0;

    const interval = setInterval(() => {
      if (start < target) { start += 100; if (start > target) start = target; }
      if (start2 < target2) { start2 += 5; if (start2 > target2) start2 = target2; }
      if (start3 < target3) { start3 += 5; if (start3 > target3) start3 = target3; }

      setCount(start);
      setCount2(start2);
      setCount3(start3);

      if (start === target && start2 === target2 && start3 === target3) {
        clearInterval(interval);
      }
    }, 5);

    return () => clearInterval(interval);
  }, []);

  const handleBooking = () => {
    if (!isLoggedIn) {
      toast.warning("Please register to access the booking page.");
      setTimeout(() => navigate("/Register"), 1500);
    } else {
      navigate("/Booking");
    }
  };

  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl shadow-lg p-6 md:p-14 m-4 md:m-8 gap-8 ">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR CREATIVE SERVICES
          </h1>
          <p className="text-sm md:text-base text-gray-500 mb-6 leading-relaxed">
            Eco-conscious photography crafted for timeless memories.
            Weddings, Pre-Weddings, Birthdays, Modern Shoots & Grand Events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={handleBooking}
              className="bg-green-700 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-1"
            >
              Book Event
            </button>
            <button
              onClick={() => navigate("/Recentphotoshot")}
              className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-1"
            >
              Explore Gallery
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center w-full">
          <img
            src="/Assests/Images/Cover_image.jpg"
            alt="Green Studio"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-100 
              opacity-0 transition-opacity duration-500" onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
          />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="text-center px-4 md:px-12 py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          OUR CREATIVE SERVICES
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "📷", title: "Portrait Sessions", desc: "Professional lifestyle and cinematic portrait shoots." },
            { icon: "📅", title: "Event Photography", desc: "Wedding, Birthday, Engagement & Corporate coverage." },
            { icon: "🌿", title: "Pre Wedding", desc: "Romantic storytelling with luxury outdoor setups." },
            { icon: "🛍️", title: "Product Photography", desc: "Premium commercial and brand-focused photography." },
          ].map((service) => (
            <div key={service.title} className="bg-white rounded-2xl p-8 shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{service.desc}</p>
              <button className="bg-green-700 hover:bg-green-900 text-white px-5 py-2 rounded-full text-sm transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TAGLINE */}
      <div className="text-center py-6 px-4">
        <h2 className="text-white font-bold text-xl md:text-4xl tracking-widest mb-2">
          Where Creativity Meets Purpose
        </h2>
        <h1 className="text-white font-bold text-lg md:text-3xl">
          Every click is crafted to bring your vision to life.
        </h1>
      </div>

      {/* PHOTO SECTION 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mx-4 md:mx-14 my-5 p-4 md:p-6 border border-gray-400 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
        <img
          src="/Assests/Images/home_img1.jpg"
          alt="moments"
          className="w-full md:w-96 h-56 md:h-72 object-cover rounded-xl"
        />
        <div className="text-center md:text-left px-2">
          <h3 className="text-white font-bold italic text-xl md:text-2xl mb-3 drop-shadow-lg">
            Capture Your Beautiful Moments With Us
          </h3>
          <p className="text-gray-200 italic text-sm md:text-base mb-5 drop-shadow-md">
            We transform your special occasions into timeless memories through creativity, passion, and professional excellence.
          </p>
          <button
            onClick={handleBooking}
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-2xl px-6 py-3 w-full md:w-72 border border-white transition-all"
          >
            Reserve your Date 📸
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="flex flex-col sm:flex-row justify-around gap-6 px-6 py-10 text-center">
        <p className="text-white font-bold text-3xl md:text-4xl">
          {count.toLocaleString()}+
          <br />
          <span className="text-lg md:text-2xl font-normal">Satisfied Customers</span>
        </p>
        <p className="text-white font-bold text-3xl md:text-4xl">
          {count2.toLocaleString()}+
          <br />
          <span className="text-lg md:text-2xl font-normal">Completed Photoshoots</span>
        </p>
        <p className="text-white font-bold text-3xl md:text-4xl">
          {count3.toLocaleString()}+
          <br />
          <span className="text-lg md:text-2xl font-normal">Successful Events</span>
        </p>
      </div>

      {/* PHOTO SECTION 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mx-4 md:mx-14 my-5 p-4 md:p-6 border border-gray-400 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
        <img
          src="/Assests/Images/home_img2.jpg"
          alt="wedding"
          className="w-full md:w-96 h-56 md:h-72 object-cover rounded-xl"
        />
        <div className="text-center md:text-left px-2">
          <h2 className="text-white font-bold italic text-xl md:text-2xl mb-3 drop-shadow-lg">
            Wedding Photography
          </h2>
          <p className="text-gray-200 italic text-sm md:text-base mb-5 drop-shadow-md">
            We believe every smile, every celebration, and every milestone deserves to be remembered beautifully.
          </p>
          <button
            onClick={() => navigate("/Recentphotoshot")}
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-2xl px-6 py-3 w-full md:w-72 border border-white transition-all"
          >
            Explore more Images 🖼️
          </button>
        </div>
      </div>

      {/* PHOTO SECTION 3 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mx-4 md:mx-14 my-5 p-4 md:p-6 border border-gray-400 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
        <img
          src="/Assests/Images/home_img5.jpg"
          alt="birthday"
          className="w-full md:w-96 h-56 md:h-72 object-cover rounded-xl"
        />
        <div className="text-center md:text-left px-2">
          <h2 className="text-white font-bold italic text-xl md:text-2xl mb-3 drop-shadow-lg">
            Birthday Photography
          </h2>
          <p className="text-gray-200 italic text-sm md:text-base mb-5 drop-shadow-md">
            Capturing the Joy, Laughter, and Magical Moments of Your Special Day, Turning Beautiful Birthday Moments into Timeless Memories.
          </p>
          <button
            onClick={() => navigate("/Recentphotoshot")}
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-2xl px-6 py-3 w-full md:w-72 border border-white transition-all"
          >
            Explore more Images 🖼️
          </button>
        </div>
      </div>

      {/* PHOTO SECTION 4 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-6 mx-4 md:mx-14 my-5 p-4 md:p-6 border border-gray-400 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
        <img
          src="/Assests/Images/home_img4.jpg"
          alt="pre-wedding"
          className="w-full md:w-96 h-56 md:h-72 object-cover rounded-xl"
        />
        <div className="text-center md:text-left px-2">
          <h2 className="text-white font-bold italic text-xl md:text-2xl mb-3 drop-shadow-lg">
            Pre-Wedding Photography
          </h2>
          <p className="text-gray-200 italic text-sm md:text-base mb-5 drop-shadow-md">
            Before the forever begins, let's capture the magic of today. Two hearts - One journey - A beautiful beginning.
          </p>
          <button
            onClick={() => navigate("/Recentphotoshot")}
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-2xl px-6 py-3 w-full md:w-72 border border-white transition-all"
          >
            Explore more Images 🖼️
          </button>
        </div>
      </div>

      {/* PHOTO SECTION 5 */}
      <div className="flex flex-col md:flex-row items-center gap-6 mx-4 md:mx-14 my-5 p-4 md:p-6 border border-gray-400 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
        <img
          src="/Assests/Images/home_img6.jpg"
          alt="party"
          className="w-full md:w-96 h-56 md:h-72 object-cover rounded-xl"
        />
        <div className="text-center md:text-left px-2">
          <h2 className="text-white font-bold italic text-xl md:text-2xl mb-3 drop-shadow-lg">
            Party Event Photography
          </h2>
          <p className="text-gray-200 italic text-sm md:text-base mb-5 drop-shadow-md">
            Every celebration deserves to be remembered forever. Lights, laughter, and unforgettable moments. We capture the vibe, the smiles, and the spark.
          </p>
          <button
            onClick={() => navigate("/Recentphotoshot")}
            className="bg-sky-400 hover:bg-sky-500 text-white rounded-2xl px-6 py-3 w-full md:w-72 border border-white transition-all"
          >
            Explore more Images 🖼️
          </button>
        </div>
      </div>

      {/* FOOTER TAGLINE */}
      <h4 className="text-center text-white font-bold text-lg md:text-2xl tracking-widest py-8">
        Innovation you can see. Quality you can feel.
      </h4>

      {/* WHATSAPP FLOAT */}
      {/* WHATSAPP FLOAT */}
<div className="fixed bottom-5 right-5 z-50">
  
   <a href="https://wa.me/918688514389"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2
             bg-green-500 hover:bg-green-600
             text-white font-bold
             px-3 py-2 rounded-full
             shadow-lg hover:shadow-xl
             transition-all duration-300
             no-underline"
    >
    <img
      src="/Assests/Images/Whatsapp.png"
      alt="WhatsApp"
      className="w-8 h-8"
    />
    <span className="text-sm sm:text-base">Chat with us</span>
  </a>
</div>

    </div>
  );
}

export default Home;

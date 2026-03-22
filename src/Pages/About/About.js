import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">

      <h1 className="main-title">About Green Studio</h1>

      {/* About Section */}
      <section className="card">
        <h2>Who We Are</h2>
        <p>
          Green Studio is a professional photography studio based in Guntur.
          We specialize in Wedding, Engagement, Birthday, Pre-Wedding and
          Candid Photography. Our goal is to capture real emotions and
          transform beautiful moments into timeless memories.
        </p>
      </section>

      {/* Mission Section */}
      <section className="card">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality photography with creativity,
          innovation and professionalism. We aim to provide an unforgettable
          experience for every client by capturing their special moments with perfection.
        </p>
      </section>

      {/* Vision Section */}
      <section className="card">
        <h2>Our Vision</h2>
        <p>
          Our vision is to become one of the most trusted and creative
          photography studios in Andhra Pradesh by consistently delivering
          excellence and customer satisfaction.
        </p>
      </section>

      {/* Passion Section */}
      <section className="card">
        <h2>Our Passionate Work</h2>
        <p>
          Photography is not just our profession — it is our passion.
          We believe every picture tells a story. With dedication,
          patience and creativity, we ensure each frame reflects
          beauty, emotion and authenticity.
        </p>
      </section>


      {/* Location Section */}
      <section className="location-section">
        <h2>Visit Our Studio</h2>
        <p>
          Green Studio <br />
          Brodipet, Guntur, Andhra Pradesh <br />
          Phone: +91 98765 43210
        </p>

        <div className="map-container">
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps?q=16.3067,80.4365&z=15&output=embed"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <h4 className="tagline">
        "Innovation you can see. Quality you can feel."
      </h4>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-5 right-5 z-50">
  
   <a href="https://wa.me/917702057436"
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
      src="/Assests/images/Whatsapp.png"
      alt="WhatsApp"
      className="w-8 h-8"
    />
    <span className="text-sm sm:text-base">Chat with us</span>
  </a>
</div>

    </div>
  );
}

export default About;

import "./Recentphotoshot.css"

function Recentphotoshot()
{

       const images = [
     "/Assests/Images/Img4.jpg",
         "/Assests/Images/Img12.jpg", 
         "/Assests/Images/Img3.jpg",
          "/Assests/Images/Img9.jpg", 
          "/Assests/Images/Img5.jpg",
           "/Assests/Images/Img6.jpg", 
           "/Assests/Images/Img7.jpg", 
           "/Assests/Images/Img8.jpg", 
           "/Assests/Images/Img1.jpg", 
           "/Assests/Images/Img10.jpg",
           "/Assests/Images/Img11.jpg",
           "/Assests/Images/Img2.jpg"
         ];

   return (
  <>
    <h2 className="text-white">Here Green Studio latest clicks</h2>

    <div className="image-grid">
      {images.map((src, index) => (
        <div className="image-wrapper" key={index}>
          <img
            src={src}
            alt={`img-${index}`}
            loading="lazy"
            className="grid-image opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.3}s` }}
            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
          />
        </div>
      ))}
    </div>
  </>
);

   
}
export default Recentphotoshot;

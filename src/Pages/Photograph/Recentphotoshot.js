import { useLocation } from "react-router-dom";
import "./Recentphotoshot.css"

function Recentphotoshot()
{
     let location=useLocation();
     console.log(location);
     const queryParams = new URLSearchParams(location.search);
     const res = queryParams.get('yogi');
     console.log(res)
     const res1=queryParams.get('pavan');
     console.log(res1+1);

       const images = [ "/Assests/Images/img4.jpg",
         "/Assests/Images/img12.jpg", 
         "/Assests/Images/img3.jpg",
          "/Assests/Images/img9.jpg", 
          "/Assests/Images/img5.jpg",
           "/Assests/Images/img6.jpg", 
           "/Assests/Images/img7.jpg", 
           "/Assests/Images/img8.jpg", 
           "/Assests/Images/img1.jpg", 
           "/Assests/Images/img10.jpg",
           "/Assests/Images/img11.jpg",
           "/Assests/Images/img2.jpg"
         ];

    return(
 <>
    <h2 className="h1tag">Here Green Studio latest clicks</h2>

      {/* {num} <br/>

      <button onClick={
         ()=>{
            num=num+1;
            console.log('update '+num);
         }
      }>update</button> */}

       <div className="image-grid"> {images.map((src, index) =>
             ( <div className="image-wrapper" key={index}> 
             <img src={src} alt={`img-${index}`} 
             loading="lazy" 
             className="grid-image" /> </div> ))} </div>
        
    {/* <Slider/>  */}

    </>
    )
   
}
export default Recentphotoshot;

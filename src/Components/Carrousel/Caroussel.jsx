import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Caroussel.css"


import img2 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/photo2.png"
import img3 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/photo3.png"
import img4 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/photo4.png"
import img5 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/photo5.png"
import img6 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/photo6.png"

import Slider from "react-slick"



function Caroussel(){
 const photos =[
{
    name: 'photo 2',
    url:img2
   },
   {
    name: 'photo 3',
    url:img3
   },
   {
    name: 'photo 4',
    url:img4
   },
   {
    name: 'photo 5',
    url:img5
   },
   {
    name: 'photo 6',
    url:img6
   }

]
const  settings ={
    dots:true,
    fade:true,
    infinite:true,
    speed:500,
    slidesToShow:1,
    arrows:true,
    slidesToScRoll:1,
    className:"slides"

    
}   
    return(   
    <div>
 <Slider {...settings}>
    {photos.map((photo)=> {
        return(
            <div>
                <img    style={{marginLeft:"auto",marginRight:'auto'}} width="100%" height="auto" src={photo.url} />
            </div>
        )
    }
    
    
    )
    
    }

 </Slider>
  </div>

 )


}
export default Caroussel;
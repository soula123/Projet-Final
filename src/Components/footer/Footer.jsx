import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"

function Footer (){
return (
  <div style={{	background: "rgba(3,17,54)"  }} className="footer-container">
    <div className="footer"> 
      <div className="waves">
          <div className="wave" id="wave1"> </div>
          <div className="wave" id="wave2"> </div>
          <div className="wave" id="wave3"> </div>
          <div className="wave" id="wave4"> </div>
  
      </div>


    <ul className="social-icon">
      <li><a href="#"><FacebookIcon /> </a> </li>
      <li> <a href="#"><InstagramIcon />   </a> </li>
      <li><a href="#"><TwitterIcon />  </a>  </li>
      <li> <a href="#"><LinkedInIcon />  </a> </li>
       </ul>
       <ul className="menu">
      <li><a href="home">Home</a> </li>
      <li> <a href="upload">Upload Project  </a> </li>
      <li><a href="#">About  </a>  </li>
      <li> <a href="#">Contact Us !</a> </li>
       </ul>
    <p> &copy;2022 OpusLab Website |All Rights Reserved </p>
    
    </div>
  </div>

)

}  



export default Footer

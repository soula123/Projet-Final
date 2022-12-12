import React, { useContext } from "react";
import AboutGlowing from "../Components/AboutGlowing/AboutGlowing";
import Examples from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/Examples/Examples.jsx";
import HomeProjects from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/HomeProjects/HomeProjects.jsx";
import NavBar from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/Navbar/NavBar.jsx";
import FeedBack from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/FeedBack/FeedBack.jsx";
import Footer from "../Components/footer/Footer";
function Home(){


    return(
    <div>
        
        <NavBar />
        <AboutGlowing />
        <Examples />
        <HomeProjects />
        <FeedBack />
        <Footer />
        
    </div>
    );
}
export default Home;


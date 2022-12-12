import React from "react";
import AboutGraphicDesign from "../Components/AboutGraphicDesign/AboutGraphicDesign";
import NavBar from "../Components/Navbar/NavBar";

import Card from "../Components/Card.jsx"
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Footer from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/footer/Footer.jsx"
import AboutWeb2 from "../Components/AboutWebDev/AboutWeb2";



function WebDev2(){
    const {inputarr,setInputArr}=useContext(DataContext)
    return(                   
    <div>
        
        <NavBar />
        <AboutWeb2 />

        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: 'wrap', gap: "50px", marginTop: "50px",marginBottom:"100px" }} >
                  {inputarr.map( data=>
                  {
                    if (data.ProjectType=="web development2")
                    { return (
                        <Card
                        Name={data.ProjectType}
                        description={data.description}
                        img={data.imageUrl}
                        path={data.projectUrl}
                    />)

                    } }) }

               <Card
                    Name="chat App"
                    description="This is the first project , it's a chat application"
                    img="https://cdn.dribbble.com/users/1769954/screenshots/14867104/media/61fb2e7aca0c9e8b9e7bde5db155d538.png?compress=1&resize=1000x750&vertical=top"
                    path="https://www.behance.net/gallery/144444183/Brand-Book-Piece-of-Art-par-Asma-Ben-Saad"
                />
        </div>  
        <Footer />
      

    </div>
    );
}
export default WebDev2;


import React from "react";
import AboutGraphicDesign from "../Components/AboutGraphicDesign/AboutGraphicDesign";
import ExamplesGraphic from "../Components/ExamplesGraphic";
import NavBar from "../Components/Navbar/NavBar";

import Card from "../Components/Card.jsx"
import pic4 from "../Images/DesignProjects/Piece.png"
import pic5 from "../Images/DesignProjects/CyberX.png"
import pic6 from "../Images/DesignProjects/Rano.png"
import { DataContext } from "../context/DataContext";
import { useContext } from "react";
import Footer from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/footer/Footer.jsx"




function GraphicDesign(){
    const {inputarr,setInputArr}=useContext(DataContext)
    console.log(inputarr)
    return(        
    <div>
       
        <NavBar />
        <AboutGraphicDesign />
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: 'wrap', gap: "50px", marginTop: "50px",marginBottom:"100px" }} >
                  {inputarr.map( data=>
                  {
                    if (data.ProjectType=="graphic design")
                    { return (
                        <Card
                        Name={data.ProjectType}
                        description={data.description}
                        img={data.imageUrl}
                        path={data.projectUrl}
                    />)

                    } }) }
                 <Card
                    Name="Pieces"
                    description="This is the first brand book , Taste the green gold"
                    img={pic4}
                    path="https://www.behance.net/gallery/144444183/Brand-Book-Piece-of-Art-par-Asma-Ben-Saad"
                />
                 <Card
                    Name="CyberX"
                    description="This is the first brand book , Taste the green gold"
                    img={pic5}
                    path="https://www.behance.net/gallery/144380639/Brand-book-CyberX-par-Amer-Abbes"
                />
                 <Card
                    Name="Rano"
                    description="This is the first brand book , Taste the green gold"
                    img={pic6}
                    path="https://www.behance.net/gallery/144181655/Brand-Book-RANO-par-Rania-Manai"
                />


            </div>  
            <Footer/>
      

    </div>
    );
}
export default GraphicDesign;


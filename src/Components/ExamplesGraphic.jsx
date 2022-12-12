import Card from "./Card.jsx"
import pic1 from "../Images/DesignProjects/green-gold.png"
import pic2 from "../Images/DesignProjects/guidelines.png"
import pic3 from "../Images/DesignProjects/Karrita.png"
import pic4 from "../Images/DesignProjects/Piece.png"
import pic5 from "../Images/DesignProjects/CyberX.png"
import pic6 from "../Images/DesignProjects/Rano.png"
import { useLocation } from "react-router-dom"



function ExamplesGraphic(props) {
    const location=useLocation; 
    console.log(props,"props")
    const inputdata= location.state?.inputdata

    return (
        <div>
            <h1 style=
                {{
                    color: "#02055A",
                    fontSize: "large",
                    fontWeight: "bold",
                    fontSize: "50px",
                    textAlign: "center",
                    marginTop: '150px'
                }}
            >
                The Projects in the Graphic Design Department </h1>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: 'wrap', gap: "50px", marginTop: "50px",marginBottom:"100px" }} >
                <Card
                    Name={inputdata.projectType}
                    description={inputdata.description}
                    img={inputdata.imageUrl}
                    path={inputdata.projectUrl}
                />
                 <Card
                    Name="Fazty"
                    description="This is the brand book , brand guideliness book"
                    img={pic2}
                    path="https://www.behance.net/gallery/144459613/Brand-Book-Fazty-par-Fatma-Zemzemi"
                />
                 <Card
                    Name="Karrita"
                    description="This is the first brand book , Taste the green gold"
                    img={pic3}
                    path="https://www.behance.net/gallery/144446489/Brand-Book-Karrita-par-Myriam-Sfar"
                />
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




        </div>


    )
}
export default ExamplesGraphic;
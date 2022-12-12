import Card from '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/Card.jsx';
import './HomeProjects.css';
import webDev from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/web-dev.png";
import graphicdesign from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/graphic-design.png"
import design1 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/design-1.png"
import python from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/python.png"

function HomeProjects() {
    return (
        <div className='HomeProjects-container'>
                    <h1 style=
                        {{
                            color: "white",
                            fontSize: "large",
                            fontWeight: "bold",
                            fontSize: "50px",
                            textAlign: "center",
                            marginTop:'150px'
                        }}
                    >
                        Projects in the different Departments
                    </h1>
                    <div className='d-flex  '>
                    <img className="element" src={design1} />
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: 'wrap', gap: "50px", marginTop: "50px",marginBottom:"100px" }} >
                        <Card
                            Name="Web development 1"
                            description="Here you will find all the projects in the web development 1 that can help you"
                            img={webDev}
                            path={""}
                        />
                        <Card
                            Name="Web development 2"
                            description="Here you will find all the projects in the web development 2 that can help you"
                            img={webDev}
                            path={""}

                        />
                        <Card
                            Name="Graphic design"
                            description="Here you will find all the projects in the graphic design that can help you"
                            img={graphicdesign}
                            path={""}

                        />
                         <Card
                            Name="Python"
                            description="Here you will find all the projects in Python that can help you"
                            img={python}
                            path={""}

                        />
                            <Card
                            Name="Digital Marketing"
                            description="Here you will find all the projects in Digital Marketing that can help you"
                            img={graphicdesign}
                            path={""}

                        />


                    </div>
                    </div>

        </div>


    )
}
export default HomeProjects;
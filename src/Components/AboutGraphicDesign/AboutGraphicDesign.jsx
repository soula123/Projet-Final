import './AboutGraphicDesign.css';
import siwar from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/Trainers/siwar.png"

function AboutGraphicDesign() {
    return (
        <div className='Glowing-container bg-darkBlue' style={{ paddingTop: "50px" }}>
            <div className='loader'>
                <div className='content'>

                    <div className='Description'>
                        <h1 style={{ color: "lightblue" }}> Graphic Design  </h1>
                        <p style={{paddingTop:"40px"}}>la conception graphique 
                        n'a jamais été pour manipuler les gens mais plutôt pour les émerveiller, Le graphisme est une discipline qui consiste à créer, choisir et utiliser des éléments graphiques pour élaborer un objet de communication et/ou de culture. C'est une manière de représenter"</p>
                    </div>
                    <img style={{width:"50%"}} src={siwar} /> 
                </div>
            </div>


        </div>


    )
}
export default AboutGraphicDesign;
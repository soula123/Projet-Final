import './AboutGlowing.css';
import picture from '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/glowing-pic.png'
import flech from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/arrowBanner.png"


function AboutGlowing() {
    return (
        <div className='Glowing-container bg-darkBlue' style={{ paddingTop: "50px" }}>
            <div className='Container'>
                <div className='Description'>
                    <h1 style={{color:"lightblue"}}>
                        The <span className="bg-pink"> Glowing Day</span> 
                    </h1>
                    <p  className='desc-paragraphe'>
                       


Le Glowing Day est la journée de remise des certifications. Pendant cette journée, les étudiants présentent le projet final pour bien pratiquer ce qu’ils ont appris et déclencher leur carrière avec un projet complet. Les étudiants présentent leurs projet devant une jury externe pour recevoir la validation du projet et avoir la cerification.
                    </p>
                    <img style={{width:"200px"}} src={flech} />

                </div>
                <div style={{ width: "50%" }}><img className="glowing-pic" src={picture} alt="glowing-day"></img></div>
            </div>

        </div>


    )
}
export default AboutGlowing;
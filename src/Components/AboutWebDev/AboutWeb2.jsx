import '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/AboutGraphicDesign/AboutGraphicDesign.css';
import sayed from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/Trainers/sayed.png"

function AboutWeb2() {
    return (
        <div className='Glowing-container bg-darkBlue' style={{ paddingTop: "50px" }}>
            <div className='loader'>
                <div className='content'>

                    <div className='Description'>
                        <h1 style={{ color: "lightblue" }}>Web development 2 </h1>
                        <p style={{ paddingTop: "40px" }}>

                           " Web development is the practice of concepting, designing, developing and maintaining websites.
                           Le niveau 2 consiste à apprendre le React js , la fameuse librairie de javascript , cette formation est dédié aux étudiants qui veulent investir dans le javascript et devenir un expert !”
                        </p>
                    </div>
                    <img style={{ marginTop:"10px",width: "50%" }} src={sayed} />
                </div>
            </div>


        </div>


    )
}
export default AboutWeb2;
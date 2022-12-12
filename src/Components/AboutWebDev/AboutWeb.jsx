import '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/AboutGraphicDesign/AboutGraphicDesign.css';
import sayed from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/Trainers/sayed.png"

function AboutWeb() {
    return (
        <div className='Glowing-container bg-darkBlue' style={{ paddingTop: "50px" }}>
            <div className='loader'>
                <div className='content'>

                    <div className='Description'>
                        <h1 style={{ color: "lightblue" }}>Web development </h1>
                        <p style={{ paddingTop: "40px" }}>

                           " Web development is the practice of concepting, designing, developing and maintaining websites.
                            A successful website does three things:
                            It attracts the right kinds of visitors.
                            Guides them to the main services or product you offer.
                            Collect Contact details for future ongoing relation.”
                        </p>
                    </div>
                    <img style={{ marginTop:"10px",width: "50%" }} src={sayed} />
                </div>
            </div>


        </div>


    )
}
export default AboutWeb;
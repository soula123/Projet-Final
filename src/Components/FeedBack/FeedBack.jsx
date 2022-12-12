import './FeedBack.css';
import Testimonials from './Testimonials';
import "./normalize.css";
import "./master.css";
import rocket2 from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/rocket2.png"
import ambouba from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/ambouba.png"

function FeedBack() {
    return (
        <div style={{ paddingTop: "40px" }}>
            <div>
                <div className='d-flex 0'>
                    <img style={{ width: "150px", marginRight: "250px", marginLeft: "60px" }} src={rocket2}></img>
                    <h1 style={{ marginRight: "250px"}} className='title-test'>
                        Feedback About The Glowing Day
                    </h1>
                    <img src={ambouba} /> 
                </div>

                <Testimonials />
              

            </div>






        </div>


    )
}
export default FeedBack;
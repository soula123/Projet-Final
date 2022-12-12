import Anim1 from '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/Anim1/Anim1.jsx';
import Caroussel from '/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Components/Carrousel/Caroussel.jsx';
import './Examples.css';
import rocket from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/rocket2.png"

function Examples() {
    return (
        <div className='examples-container' >

            <div className='d-flex Cont'>
                <Anim1 />
                <div >
                    <h1 style={{ marginTop: "150px", textAlign: "center" }}>
                        Back To The Glowing Days
                    </h1>
                    <Caroussel className='carousel-container'/>
                </div> 
                <div> 
                <Anim1 style={{ marginRight: "0px", position: 'absolute' }} />
                <img style={{ marginTop:"60px",marginLeft:"10px", width: "200px" }} src={rocket} />
                </div>
            </div>


        </div>



    )
}
export default Examples;
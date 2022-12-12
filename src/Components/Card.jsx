import React from "react";


function Card ({Name,description,img,path}){
   
    return (
            <div className="card" style={{width: "25%",margin:"10px"}}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Name}</h5>
                    <p className="card-text text-secondary ">{description}</p>  
                    <a href={path} className="btn" style={{marginLeft:"150px",backgroundColor:"lightblue",color:"white"}}>Go To </a>
                </div>
            </div>
    )
}
export default Card;
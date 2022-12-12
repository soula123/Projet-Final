import React, { useContext } from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { DataContext } from "../../context/DataContext";
import "./UserForm.css"
/* import { Button } from "bootstrap";
 /* import { collection,addDoc } from "firebase/firestore/lite";

*/
export default function UserForm() {
    /* const[profile,setProfile]=useState({
    ProjectType:"",
    description:"",
    imageUrl:"",
    projectUrl:"",
    });
    
    const saveChange=async()=>{
    await addDoc(collection(props.db,"user-response-save"),{
        ProjectType:profile.ProjectType,
        description:profile.description,
        imageUrl:profile.imageUrl,
        projectUrl:profile.projectUrl
    
    })
    .then(function(res)  {
        alert("data is successfully added")
    }).catch(function(err){
        alert("data is not added")
    
    });
    } */


    const [inputdata, setinputdata] = useState([])

    const { inputarr, setInputArr } = useContext(DataContext)




    function handleChange(e) {
        setinputdata({
            ...inputdata,
            [e.target.id]: e.target.value
        })
    }



    let { ProjectType,
        description,
        imageUrl,
        projectUrl } = inputdata




    function addProject() {
        setInputArr([...inputarr, {
            ProjectType,
            description,
            imageUrl,
            projectUrl
        }])

        console.log(inputdata)
        setinputdata({
            ProjectType: "",
            description: "",
            imageUrl: "",
            projectUrl: "",
        })
    }

    return (
        <div className="body">
            <div className="section" style={{ marginTop: "20px" }}>

                <div className="color"> </div>
                <div className="color"> </div>
                <div className="color"> </div>
                <div className="boxx" >
                    <div className="square" > </div>
                    <div className="square" > </div>
                    <div className="square" > </div>
                    <div className="square" > </div>
                    <div className="square" > </div>

                    <div className="container">
                        <div className="form">
                            <h2>Upload your project here !</h2>
                            <div className="form">
                                <div className="inputBox">
                                    <input onChange={handleChange} value={inputdata.ProjectType} className="inputBox" type="text" id="ProjectType" placeholder="ProjectType" />
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={inputdata.description} className="inputBox" type="text" id="description" placeholder="description" />
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={inputdata.imageUrl} className="inputBox" type="text" id="imageUrl" placeholder="imageUrl" />
                                </div>
                                <div className="inputBox">
                                    <input onChange={handleChange} value={inputdata.projectUrl} className="inputBox" type="text" id="ProjectUrl" placeholder="ProjectUrl" />
                                </div>
                                <div className="inputBox">
                                <input type="submit" onClick={addProject} />
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </div>
    )

}

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Auth from "../Pages/Auth.jsx"
import { useState,useEffect } from "react";
import { UserContext } from "../context/UserContext";
import GraphicDesign from "../Pages/GraphicDesign";
import Upload from "../Pages/Upload";
import { DataContext } from "../context/DataContext";
import WebDev from "../Pages/WebDev";
import WebDev2 from "../Pages/WebDev2";




const User = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/GraphicDesign" element={<GraphicDesign /> }/>
      <Route path="/Upload" element={<Upload />} />
      <Route path="/WebDev" element={<WebDev />} />
      <Route path="/WebDev2" element={<WebDev2 />} />

    </Routes>
  )
}
const NotUser = () => {
  return (
    <Routes>  
      
      <Route path="/" element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Home" element={<Auth />} />
      <Route path="/GraphicDesign" element={<Auth />} />
      <Route path="/Upload" element={<Auth />}  />
      <Route path="/WebDev" element={<Auth />} />
    </Routes>
  )
}




const RootContainer = () => {
  const [user, setUser] = useState(false);
  const [inputarr, setInputArr] = useState([{
    ProjectType: "",
    description: "",
    imageUrl: "",
    projectUrl: "",
}]);


useEffect(() => {
  const data = window.localStorage.getItem('MY_APP_STATE');
  if ( data !== null ) 
  {setUser(JSON.parse(data));}
}, []);

useEffect(() => {
  window.localStorage.setItem('MY_APP_STATE', JSON.stringify(user));
});

  return (
    <DataContext.Provider value={{inputarr,setInputArr}}>
    <UserContext.Provider value={{ user, setUser }}>
      {user ? <User /> : <NotUser />}

    </UserContext.Provider>
    </DataContext.Provider>
  )

  /*
  return user?(
        <Routes> 
          <Route path="/" element={ <Home /> }/>
         
          <Route path="/Home" element={ <Home /> }/>
        </Routes>
    )
    :(
      <Routes>  
          <Route path="/" element={ <Auth /> }/>
          <Route path="/auth" element={ <Auth /> }/>

         
          <Route path="/Home" element={ <Auth /> }/>  
        </Routes>
    )
    */
}
export default RootContainer;
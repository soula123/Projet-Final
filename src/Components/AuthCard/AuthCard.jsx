import img from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/opuslogo.png"
import './AuthCard.css';
import { AuthContext } from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/context/AuthContext.jsx";


import { initializeApp} from 'firebase/app';
import { setPersistence, browserSessionPersistence } from "firebase/auth";


import { 
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {useContext,useCallback, useRef} from "react"
import { UserContext } from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/context/UserContext.jsx";

const firebaseApp = initializeApp( {
  apiKey: "AIzaSyBP0ufXsrOsRaCPYWt9JCX9gW2k1wGu4Z8",
  authDomain: "authentication-tutorial-ec556.firebaseapp.com",
  projectId: "authentication-tutorial-ec556",
  storageBucket: "authentication-tutorial-ec556.appspot.com",
  messagingSenderId: "945663559539",
  appId: "1:945663559539:web:51b9786fd75d399bf86706",
  measurementId: "G-22FP5PHT1F",
});  

function  AuthCard() {
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const {user,setUser}=useContext(UserContext);
  

  
  // Login using email/password
   const loginEmailPassword =async (e) => {
    e.preventDefault()
    const loginEmail = emailRef.current.value
    const loginPassword = passRef.current.value
  
    // step 1: try doing this w/o error handling, and then add try/catch
  
    // step 2: add error handling
    try {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(() => {
        // Signed in 
        setUser(true)
        // ...
      })
       }
     catch(error) {
       alert(`There was an error: ${error}`)
     }
};  
   
  const auth = getAuth(firebaseApp);


 /* if (currentUser) {
    return <Navigate to="/" />;
  }


  
  /* Monitor auth state
  const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user)
        showApp()
        showLoginState(user)
  
        hideLoginError()
        hideLinkError()
      }
      else {
        showLoginForm()
        lblAuthState.innerHTML = `You're not logged in.`
      }
    })
  }
  
  // Log out
  const logout = async () => {
    await signOut(auth);
  }
  */

  

  
 /* monitorAuthState();*/
  return (

    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">

          <div className="d-flex justify-content-center  align-items-center">
            <img className="logo" src={img} alt="logo"></img>
            <h3 className="Auth-form-title">Sign In</h3>
          </div>

          <div className="form-group mt-3">
            <label>Login</label>
            <input
              ref={emailRef}
              type="text"
              className="form-control mt-1"
              placeholder="Enter Login Email"
          
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              ref={passRef}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            
            />
          </div>
          <div className="d-grid gap-2 mt-4 mb-4">
            <button 
            type="submit"
            id="btnLogin"
            className="btn-Login"
            onClick={loginEmailPassword}
           >
              login
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )


}



export default AuthCard;
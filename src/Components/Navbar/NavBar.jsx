import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/Images/opuslogo.png"
import { Link } from "react-router-dom";
import './Navbar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from "/home/salma/Desktop/WebNiveau2/FinalProject/glowing-day-app/src/context/UserContext.jsx";
import { useContext } from 'react';


function NavBar() {
  const {user,setUser}=useContext(UserContext);

  return (
    <Navbar className="bg-darkBlue"
      style={{ height: "100px" }} expand="lg">
      <Container fluid >
        <Navbar.Brand href="#">
          <img
            style={{ width: "100px", height: "100px" }} src={logo}>
          </img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-aut my-2 my-lg-0"
            style={{ color:'white' , maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link
                style={{ fontFamily:"roboto",textDecoration: "none", color: "white", fontSize: "20px" }} to="/Home">Home</Link>
            </Nav.Link>
            
            <NavDropdown
              style={{ fontFamily:"roboto", fontSize: "20px" }} className="navDropDown" title={<span style={{color:"white"}}>Training</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item >
              <Link
                style={{ fontFamily:"roboto",textDecoration: "none", color: "black", fontSize: "15px" }} to="/GraphicDesign"> Graphic Design
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link
                style={{ fontFamily:"roboto",textDecoration: "none", color: "black", fontSize: "15px" }} to="/WebDev"> Web development 1
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
              <Link
                style={{ fontFamily:"roboto",textDecoration: "none", color: "black", fontSize: "15px" }} to="/WebDev2"> Web development 2
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Digital Marketing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Python
              </NavDropdown.Item>

            </NavDropdown>
            <Nav.Link>
              <Link
                style={{ fontFamily:"roboto",  textDecoration: "none", color: "white", fontSize: "20px" }} to="/Upload">Upload a project !</Link>
            </Nav.Link>
          </Nav>
    
        </Navbar.Collapse>
        
        <h3 style={{color:"white",fontSize:"20px",marginRight:"10px"}}>LogOut </h3>
        
        <button type="button" class="btn btn-outline-primary"  onClick={()=>{
            setUser(false);
            window.location.reload();
        }}> <LogoutIcon /> 
          </button>

        
        
      </Container>
    </Navbar>
  );
}

export default NavBar;
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll } from "react-scroll";


function BarraMenu(){



  const fondo = {
    backgroundColor: 'blue !important' ,
  }

return(
   
   <Navbar  className={fondo}  >
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto" >
      <Nav.Link activeClass="active" to="section1"  spy={true}  smooth={true}  offset={-70} duration={500}>Servicios</Nav.Link>
      <Nav.Link  activeClass="active" to="section2" spy={true}  smooth={true}  offset={-70} duration={500}>Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    
  </Navbar>
)



}

export default BarraMenu;




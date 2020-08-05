import React, { Component } from "react";
import logo from "../logo.svg";
import logoz from '../imagenes/z.fw.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar1 extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

 

  render() {
    const fondo = {
        backgroundColor: 'blue !important',
      }

    return (
        <nav className="nav" style={{fondo}} id="navbar">
        <div className="nav-content">
          <img
            src={logoz}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Presentación
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Clientes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Contacto
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
       
      
    );
  }
}



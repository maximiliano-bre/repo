import React from "react";
import SimpleMap from '../paginas/map'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Contacto({ title, id, color, foto }) {

  return (

    <div style={{ backgroundColor:color }}>
    <div className="section-content" id={id}>
      <h1>{title}</h1>
      <hr></hr>
      <br></br>
      <div>
        <Row>
           
            <Col lg="4">
                <SimpleMap/> 
            </Col>
            <Col lg="1"></Col>
            <Col lg="6">
                <p>Direccion Rogelio Gomez xxx</p>
                <p>Telefono 03445 156624568</p>
                <p>Email Zbytes@Zbytes.com.ar</p>
            </Col>
           
        </Row>
            
            
            
      </div>
    
    </div>
  </div>

  );
}

import React from "react";
import img2 from '../imagenes/3.jpg'
import SimpleMap from '../paginas/map'

export default function Section({ title, subtitle, maps, id, color, foto }) {

  return (

    <div style={{ backgroundColor:color }}>
    <div className="section-content" id={id}>
      <h1>{title}</h1>
      <hr></hr>
      <br></br>
      <div>
            {maps ?  (<SimpleMap/>) : (<img src={foto}  />)}
            <p style={{float:"rigth"}}> {subtitle}</p>
      </div>
    
    </div>
  </div>

  );
}

{/*
            <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
    */}

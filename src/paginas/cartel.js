import React from 'react';
import Card from 'react-bootstrap/Card'



function Cartel(props){
        
    return (
        <Card className={props.colortexto}>
        <Card.Img src={props.imagen} alt="Card image" />
        <Card.ImgOverlay>
            <Card.Title>{props.titulo}</Card.Title>
            <Card.Text>
                    {props.texto}
            </Card.Text>
        </Card.ImgOverlay>
      </Card>
    )
}

export default Cartel
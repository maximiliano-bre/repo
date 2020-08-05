import React from 'react';
import Alert from 'react-bootstrap/Alert'

function Alerta(props){
    /*'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',*/ 
  let c = props.color;
  console.log(props.color);
  const style = {
    background: c
  };

    return (
       
        <Alert style={style} >
        <Alert.Heading>{props.encabezado}</Alert.Heading>
       
        <p>
           {props.texto}
        </p>
        
        
        </Alert>
     
    )
}

export default Alerta


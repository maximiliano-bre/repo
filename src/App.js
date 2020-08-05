import React from 'react';
import './App.css';
import img5 from './imagenes/5_m.fw.png'
import imgpropaganda from './imagenes/partner.fw.png'

import img6 from './imagenes/fondo_r2_c2.jpg'
import Section from './paginas/Section'
import Narvar from './paginas/Narvar'
import textContacto from './textos/TxtContacto'
import textoServicios from './textos/Txtservicios'
import textoPresentacion from './textos/TxtPresentacion'
import textoClientes from './textos/TxtClientes'
import Contacto from './paginas/Contacto'


function App() {

  const mystyle = {
    width:"80%",
    height:"80%"
  }
  const estilop = {
    width:"90%",
    paddingLeft: '10%',
    textAlign:"justify"
    
  }

  return (
    

    <div style={{width:"100%"}}>
      <div className="App">

        <Narvar />
        <Section
          title="Presentación"
          subtitle={textoPresentacion}
          maps={false}
          id="section1"
          color="#79bc9b"
          foto={img6}
        />

        <Section
          title="Servicios"
          subtitle={textoServicios}
          maps={false}
          id="section2"
          color="#2196f3"
          foto={img5}
        />

        <Section
          title="Clientes"
          subtitle={textoClientes}
          maps={false}
          id="section3"
          color="#00bcd4"
          foto={ imgpropaganda}
        />

        <Contacto
          title="Contacto"
          id="section4"
          color="#db5683"
        />

  {/*
      <Row>
        <Col lg="1"></Col>
        <Col>
        <Narvar/>
        
        </Col>
        <Col lg="1"></Col>
      </Row>


      <Section
          title="Section 1"
          subtitle={Texto1}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={Texto1}
          dark={false}
          id="section2"
        />

       
      <header style={{textAlign:"center"}}>
      <Row>
          <Col lg="1"></Col>
          <Col md="auto" >
              <img src={img6} style={mystyle} />
              <p style={estilop}>Adquirimos experiencia durante muchos años como independientes, realizamos varios tipos de trabajo dentro del rubro de la informática y por eso sentimos que era hora de darle un rumbo y un nombre a nuestro conocimiento y así dedicarnos exclusivamente a los servicios informáticos, evocados a empresas. Tenemos la firme creencia que el excelente servicio que brindamos a nuestros clientes será nuestra clave del éxito.
                  Nos caracterizamos y diferenciamos de nuestra competencia porque nos adaptamos a las necesidades de cada cliente.
                  Disponemos de planes de abono o pago por trabajo realizado, nos adaptamos a su presupuesto.
                  La recomendación y satisfacción de nuestros clientes es la principal fuente de nuestro trabajo.
              </p>
          </Col>
          <Col lg="1"></Col>
        </Row>
      
      </header>

      
   
      <Row>
          <Col lg="1"></Col>
          <Col lg="10" >
          <Alerta tipo={'secondary'} color={'#8ED1FC'} encabezado={'Repaciones de PC'} texto={'contamos con todo lo necesario para reparar tu pc'}/> 
      <Alerta tipo={'secondary'} color={'#B973FF'} encabezado={'Servicio internet'} texto={'Brindamos con el mejor servicio de internet, contamos con seridores locales y zonales para garantizar la mejor conectividad'}/>
          <Alerta tipo={'secondary'} color={'#FF95FF'} encabezado={'Impresiones'} texto={'Contamos con tecnologia nueva lo que nos brinda una mejor calidad de impresion, anillados, copias en gerenal'}/>
          <Alerta tipo={'secondary'} color={'#99B3FF'} encabezado={'Soluciones informáticas'} texto={'Contamos con tecnologia nueva lo que nos brinda una mejor calidad de impresion, anillados, copias en gerenal'}/>
          <Alerta tipo={'secondary'} color={'#0693E3'} encabezado={'Cursos'} texto={'Contamos con tecnologia nueva lo que nos brinda una mejor calidad de impresion, anillados, copias en gerenal'}/>
          </Col>
          <Col lg="1"></Col>
        </Row>
     

    
      
      

      <Container>
       
      
         
      
 <Cartel imagen={img5} titulo="Repaciones de PC" colortexto="text-white" texto="contamos con todo lo necesario para reparar tu pc"/> 
          <br></br>
          <Cartel imagen={img2} titulo="Servicio internet" colortexto="text-white" texto="Brindamos con el mejor servicio de internet, contamos con seridores locales y zonales para garantizar la mejor conectividad"/> 
          <br></br>
          <Cartel imagen={img3} titulo="Impresiones" colortexto="text-white" texto="Contamos con tecnologia nueva lo que nos brinda una mejor calidad de impresion, anillados, copias en gerenal"/> 
          <br></br>
         
         

          
      
       
      </Container>*/}
           
     
     
    </div>
    </div>
  );
}

export default App;

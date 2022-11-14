import React from "react"
import Sc from "./images/Vip.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap'; 
import ErrorMess from "./ErrorMess";

export default function Cardser2()
{   return(
    <div className="Cardser1">  
   <Container className='p-4'>  
  <Col md="12">  
  <Card bg="black" text="white" border="white">  
  <Card.Img variant="top" src={Sc} />  
  <Card.Body>  
    <Card.Title bg>Everyday Office Pickup/Drop off</Card.Title>  
    <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary" bg="gold" onClick={ErrorMess}>Book Now</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>  
    )
}
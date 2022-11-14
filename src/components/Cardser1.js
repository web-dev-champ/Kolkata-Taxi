import React from "react"
import Sc from "./images/Pri.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, Col, Button} from 'react-bootstrap'; 
import ErrorMess from "./ErrorMess";

export default function Cardser1()
{   return(
    <div className="Cardser1">  
   <Container className='p-4'>  
  <Col md="12">  
  <Card bg="black" text="white" border="white">  
  <Card.Img variant="top" src={Sc} />  
  <Card.Body>  
    <Card.Title bg>Private Car Pickup</Card.Title>  
    <Card.Text>  
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
    </Card.Text>  
    <Button variant="primary" onClick={ErrorMess}>Book Now</Button>  
  </Card.Body>  
</Card>  
    </Col>  
</Container>  
    </div>  
    )
}
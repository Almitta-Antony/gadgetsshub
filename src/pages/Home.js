import React from 'react'
import {  Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className='home mb-5 mt-5' >
      <Container>
        <Row className='mt-5 mb-5'>
          <Col lg={8} md={8} sm={12} xs={12} className='mt-5'>
          <Carousel>
      <Carousel.Item interval={500}>
        <img src="https://i.postimg.cc/Hsw1w6Q5/carosul-1.jpg"
        className='w-100' style={{height:'450px'}} alt="" />
        
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://i.postimg.cc/gk17w8w5/carasoul3.webp"
      className='w-100' style={{height:'450px'}} alt="" />

        
      </Carousel.Item>
      <Carousel.Item interval={500}> 
      <img src="https://i.postimg.cc/rF9kLd0r/carasoulm.jpg" 
      className='w-100'style={{height:'450px'}} alt="" />

       
      </Carousel.Item>
    </Carousel>
          </Col>



          <Col lg={4} md={4} sm={12} xs={12} className='text-light text-center mt-5 mb-5' >
   <div className='mt-2'>
     <h1>GADGET HUB</h1>
    
     <h4 className='text-center' >"Empower your digital lifestyle at GADGETS HUB – Unleashing the Future of Connectivity" </h4>
  <Link to={'/add'}>
    <button className='hb mt-1 w-75  border-0 mb-5' >GET STARTED</button>
    </Link >
   </div>


          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Home
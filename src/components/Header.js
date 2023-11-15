import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/productDetailSlice';


function Header() {
  const allProducts=useSelector((state)=>state.app.products)

  const dispatch=useDispatch()


  const [searchData,setSearchData] =useState("");

  useEffect(()=>{
    dispatch(searchProduct(searchData))
  },[searchData])

  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
<Link to={'/'}>
          <Navbar.Brand href="#home"><img src="https://i.postimg.cc/3NZTB4z7/glogo.jpg"  
          style={{height:'40px',width:'70px'}}
          
          alt="" />
          </Navbar.Brand>
  
</Link>        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
   <Link to={'/add'}  style={{textDecoration:'none'}}>
               
       <Nav.Link href="#home" >ADD </Nav.Link>
   </Link>


<Link to={'/read'} style={{textDecoration:'none'}}>
              <Nav.Link href="#link">View All ({allProducts.length})</Nav.Link>
    
</Link>          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>(setSearchData(e.target.value))}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
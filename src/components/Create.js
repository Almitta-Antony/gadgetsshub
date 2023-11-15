import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createProduct } from '../redux/productDetailSlice';
import { useNavigate } from "react-router-dom";
import Header from './Header';



function Create() {
    const [products, setProducts] = useState({})

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getProductData = (e) => {
        setProducts({ ...products, [e.target.name]: e.target.value });
        console.log(products);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("products...", products);
        dispatch(createProduct(products));
        navigate("/read");

    };
    return (
        <div>
            <Header></Header>
            <h2 className='text-center mt-5'>ADD PRODUCT </h2>
            <Container className='mt-5 w-75 border bg-light text-dark ' style={{ borderRadius: '10px' }}>

                <Row>
                    <Col className='mt-5 mb-5'>

                        <Form className='w-50 mx-auto' onSubmit={handleSubmit} >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Product name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter product name" onChange={getProductData} />
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="num" name="price" placeholder="Enter product price" onChange={getProductData} />
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter product name" onChange={getProductData} />
                                <Form.Label>Product image</Form.Label>
                                <Form.Control type="text" name="image" placeholder="Add product image" onChange={getProductData} />
                                <Row>
                                    <Col xs={12} sm={12}>                                        
                                        <input className='mt-5 ms-2 me-2' name="category" value="laptop" type="radio" onChange={getProductData} />
                                        <label >laptop</label>
                                    </Col>
                                    <Col xs={12} sm={12} >                                  
                                        <input className='mt-5 ms-2 me-2' name="category" value="mobile" type="radio" onChange={getProductData} />
                                        <label >mobile</label>
                                    </Col>
                                    <Col xs={12} sm={12}>
                                        <input className='mt-5 ms-2 me-2' name="category" value="accessories" type="radio" onChange={getProductData} />
                                        <label >accessories</label>
                                    </Col>
                                    <Col xs={12} sm={12}>                                        
                                        <input className='mt-5 ms-2 me-2' name="category" value="cable" type="radio" onChange={getProductData} />
                                        <label >cable</label><br />
                                    </Col>
                                </Row>

                                <button type="submit" class="bg-black text-white mt-5">
                                    Submit
                                </button>


                            </Form.Group>
                        </Form>




                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Create
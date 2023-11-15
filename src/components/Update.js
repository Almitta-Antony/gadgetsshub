import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../redux/productDetailSlice';
import Header from './Header';


function Update() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState()
    const { products, loading } = useSelector((state) => state.app)




    useEffect(() => {
        if (id) {
            const singleProduct = products.filter((i) => i.id === id)
            setUpdateData(singleProduct[0])
        }
    }, [])

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    console.log("updated Data", updateData);

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateProduct(updateData));
        navigate("/read")
    }

    return (
        <div>
            <Header></Header>

            <div className='mt-5'>
                <u><h2 className='text-center'>EDIT PRODUCT DETAILS</h2></u>
                <Container className='mt-5 w-75 border bg-light text-dark ' style={{ borderRadius: '10px' }}>
                    <Row>
                        <Col>
                            <Form className='w-50 mx-auto mt-5' onSubmit={handleUpdate}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Product name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter product name" value={updateData && updateData.name} onChange={newData} />
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="num" name="price" placeholder="Enter product price" value={updateData && updateData.price} onChange={newData} />
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" name="description" placeholder="Enter product description" value={updateData && updateData.description} onChange={newData} />
                                    <Form.Label>Product image</Form.Label>
                                    <Form.Control type="text" name="image " placeholder="Add product image" value={updateData && updateData.image} onChange={newData} />

                                    <Row>
                                        <Col xs={12} sm={12}>                                            
                                            <input className='mt-5 ms-2 me-2' name="category" value="laptop" type="radio" checked={updateData && updateData.category == 'laptop'} onChange={newData} />
                                            <label >laptop</label>

                                        </Col>
                                        <Col xs={12} sm={12}>
                                        <input className='mt-5 ms-2 me-2' name="category" value="mobile" type="radio" checked={updateData && updateData.category == 'mobile'} onChange={newData} />
                                            <label >mobile</label>

                                        </Col>
                                        <Col xs={12} sm={12}>
                                        <input className='mt-5 ms-2 me-2' name="category" value="accessories" type="radio" checked={updateData && updateData.category == 'accessories'} onChange={newData} />
                                            <label >accessories</label>

                                        </Col>
                                        <Col xs={12} sm={12}>
                                            <input className='mt-5 mb-5 ms-2 me-2' name="category" value="cable" type="radio" checked={updateData && updateData.category == 'cable'} onChange={newData} />
                                            <label >cable</label><br />

                                        </Col>
                                       
                                    </Row>
                                    <Button className='  bg-dark border-0  ' type="submit" class="hb">
                                        Submit
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Update
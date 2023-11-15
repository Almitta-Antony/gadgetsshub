import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, showProduct } from '../redux/productDetailSlice';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Header from './Header';


function Read() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const [id, setId] = useState();

    const [radioData,setRadioData]=useState("")

    const { products, loading, searchData } = useSelector((state) => state.app)

    const allProducts = useSelector((state) => state.app.products)
    const singleProduct = allProducts.filter((i) => i.id === id)
    console.log("singleProduct", singleProduct);

    useEffect(() => {
        dispatch(showProduct())

    }, [])

    if (loading) {
        return <h1 className='text-center'><i class="fa-solid fa-regular fa-spinner fa-spin"></i></h1>

    }

    return (
        <div ><Header></Header>


            <Container>
                <Row >

                    <Col >
                        <h2 className='text-center mt-5'>All Products</h2>
                        <Row>
                        <div className='text-center mt-5'>


                            <Col >
                            <input className='ms-3' name="category" checked={radioData===""} type="radio" />
<label className='ms-2 me-2 ' >All</label>
<input className='ms-3' name="category" value="laptop" checked={radioData === "laptop"} type="radio"  onChange={(e)=>setRadioData(e.target.value)}/>
<label className='ms-2 me-2' >laptop</label>
<input className='ms-3' name="category" value="mobile" checked={radioData === "mobile"} type="radio" onChange={(e)=>setRadioData(e.target.value)}/>
<label className='ms-2 me-2'>mobile</label>

                            </Col>
                          

                            <Col>
                            <input className='ms-3' name="category" value="accessories" checked={radioData==="accessories"} type="radio" onChange={(e)=>setRadioData(e.target.value)}/>
<label className='ms-2 me-2'>accessories</label>
<input className='ms-3' name="category" value="cable" checked={radioData==="cable"} type="radio" onChange={(e)=>setRadioData(e.target.value)}/>
<label className='ms-2 me-2'>cable</label>

                            </Col>
                            </div>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                        </Row>
                        <Row className='mt-5'>
                            {products &&

                                products.filter((i) => {
                                    if (searchData.length == 0) {
                                        return i
                                    }
                                    else {
                                        return i.name.toLowerCase().includes(searchData.toLowerCase())
                                    }
                                }).filter((i)=>{
                                    if(radioData==="laptop"){
                                        return i.category=== radioData;
                                    }
                                    else if(radioData==="mobile"){
                                        return i.category=== radioData;

                                    }
                                    else if(radioData==="accessories"){
                                        return i.category=== radioData;

                                    }
                                    else if(radioData==="cable"){
                                        return i.category=== radioData;

                                    }
                                    else{
                                        return i
                                    }
                                })


                                    .map((i) => (
                                        <Col lg={3} md={4} sm={6} xs={12} >


                                            <Card  key={i.id} style={{ width: '18rem' }} className='border-0 p-2 ms-4 mt-2 bg-black text-white' >
                                                <Card.Img variant="top" src={i.image} />
                                                <Card.Body className='allpcard'>
                                                    <Card.Title>{i.name}</Card.Title>

                                                    <Card.Text>
                                                        <p>Rs.{i.price}</p>
                                                        <p>{i.category}</p>
                                                        {i.description.length > 30 ? i.description.slice(0, 30) + ".." : i.description}
                                                    </Card.Text>
                                                    <Button variant="" onClick={() => [setId(i.id), handleShow()]} className='text-white'>View</Button>


                                                    {singleProduct.map((j) => (
                                                        <Modal id={id} show={show} onHide={handleClose} size="md" className='modal text-black' 
                                                            aria-labelledby="contained-modal-title-vcenter"
                                                            centered>
                                                            <Modal.Header className='border-0' style={{background:'transparent'}}  closeButton>
                                                              <b text-center> DETAILS</b>
                                                            </Modal.Header>
                                                            <Modal.Body style={{background:'transparent'}} >
                                                                <img src={j.image} style={{height:'300px',width:'300px'}} alt="" />
                                                                <hr />
                                                                <b className='mt-2'>{j.name}</b>
                                                                <b>
                                                                    <p>CATEGORY: {j.category}</p>
                                                                    <p>PRICE: Rs.{j.price}</p>
                                                                    <p>DESCRIPTION: {j.description}</p>
    
                                                                </b>

                                                            </Modal.Body>
                                                        </Modal>
                                                    ))
                                                    }


                                                    <Link to={`/edit/${i.id}`}>
                                                        <Button variant="" ><i class="fa-solid fa-pen-to-square text-white"></i></Button>

                                                    </Link>                                        <Button variant="" onClick={() => dispatch(deleteProduct(i.id))}><i class="fa-solid fa-trash text-white"></i></Button>

                                                </Card.Body>
                                            </Card>
                                        </Col>

                                    )

                                    )

                            }


                        </Row>
                    </Col>





                </Row>
            </Container>
        </div>
    )
}

export default Read
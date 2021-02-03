import React from 'react';
import {
    Row, 
    Col,
    Form,
    Button
} from 'react-bootstrap';
import Login from './../images/login.png';
import { useDispatch } from 'react-redux';
import {login} from './../actions'

export default function Signin() {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        dispatch(login());
      };

    return (
        <Row className="align-items-center">
            <Col md={6} sm={12}>
                <img src={Login} alt="Login Image" className="w-100" data-aos="fade-up"/>
            </Col>
            <Col md={6} sm={12} className="px-5">
                <Row className="justify-content-center">
                    <Col md={8} >
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

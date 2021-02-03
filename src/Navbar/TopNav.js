import React from 'react';
import {
    Nav, 
    Button,
    Form,
    Row,
    Col,
    Badge
} from 'react-bootstrap';
import Menu from './../images/menu.png';
import Logout from './../images/logout.png';
import Notification from './../images/bell.png';
import Message from './../images/message.png';
import { useDispatch } from 'react-redux';
import {logout} from './../actions'
import styled from 'styled-components'

const Btn = styled.a`
    color: #212529;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`
const CountBadge = styled(Badge)`
    position: relative;
    bottom: 8px;
    right: 28px;
    color: white;
}
`

export default function TopNav() {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logout());
      };
    return (
        <Nav className="p-3 justify-content-between">
            <Nav.Item className="d-flex">
                <Button variant="primary" className="d-flex justify-content-center align-items-center">
                    <img src={Menu} alt="Menu Icon" height="20" width="20"/>
                </Button>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control className="border-0 mx-2" placeholder="Search for something" />
                        </Col>
                    </Row>
                </Form>
            </Nav.Item>
            <Nav.Item>
                <Btn href="#">
                    <img src={Message} alt="Message Icon" height="20" width="20" className="mx-3"/>
                    <CountBadge variant="warning">
                        16
                    </CountBadge>
                </Btn>
                <Btn href="#">
                    <img src={Notification} alt="Notification Icon" height="20" width="20" className="mx-3"/>
                    <CountBadge variant="success">
                        8
                    </CountBadge>
                </Btn>
                <Btn href="#" onClick={handleClick} className="ml-3">
                    <img src={Logout} alt="Logout Icon" height="15" width="15" className="mr-2"/>
                    Log out
                </Btn>
            </Nav.Item>
        </Nav>
    )
}

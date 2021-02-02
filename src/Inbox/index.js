import React from 'react'
import { 
    Row,
    Col,
    Button 
 } from 'react-bootstrap';
import EmailList from '../EmailList';

export default function Inbox() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <SideBar></SideBar>
                </Col>
                <Col md={8}>
                    <EmailList/>
                </Col>
            </Row>
        </div>
    )
}

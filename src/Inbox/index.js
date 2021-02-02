import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import RecievedEmails from '../RecievedEmails';
import Sidebar from '../Sidebar';

export default function Inbox() {
    return (
        <div>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <RecievedEmails/>
                </Col>
            </Row>
        </div>
    )
}

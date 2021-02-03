import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import RecievedEmails from '../RecievedEmails';
import Sidebar from '../Sidebar';
import TopNav from '../Navbar/TopNav';

export default function Inbox() {
    return (
        <div>
            <TopNav/>
            <Row>
                <Col md={3}>
                    <Sidebar/>
                </Col>
                <Col md={9}>
                    <RecievedEmails/>
                </Col>
            </Row>
        </div>
    )
}

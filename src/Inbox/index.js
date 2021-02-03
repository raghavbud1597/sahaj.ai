import React, { useState } from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import RecievedEmails from '../RecievedEmails';
import Sidebar from '../Sidebar';
import TopNav from '../Navbar/TopNav';
import LeftNav from '../Navbar/LeftNav';
import styled from 'styled-components';

const InboxSection = styled(Row)`
    background-color: #F3F3F4;
    padding-top: 20px;
`

export default function Inbox() {
    const [expandLeftNav, toggleExpandLeftNav] = useState(false);

    return (
        <div className="vh-100 vw-100">
            <Row>
                <Col md={expandLeftNav ? 3 : 1 }>
                    <LeftNav/>
                </Col>
                <Col md={expandLeftNav ? 9 : 11 }>
                    <TopNav 
                        toggleExpandLeftNav={toggleExpandLeftNav}
                        expandLeftNav={expandLeftNav}
                    />
                    <InboxSection>
                        <Col md={3}>
                            <Sidebar/>
                        </Col>
                        <Col md={9}>
                            <RecievedEmails/>
                        </Col>
                    </InboxSection>
                </Col>
            </Row>
        </div>
    )
}

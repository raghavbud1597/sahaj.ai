import React, { useState } from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import RecievedEmails from '../RecievedEmails';
import SentEmails from '../SentMails';
import Sidebar from '../Sidebar';
import TopNav from '../Navbar/TopNav';
import LeftNav from '../Navbar/LeftNav';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const InboxSection = styled(Row)`
    background-color: #F3F3F4;
    padding-top: 20px;
`

export default function Inbox() {
    const [expandLeftNav, toggleExpandLeftNav] = useState(false);

    return (
        <div className="vh-100 vw-100">
            <Row className="no-gutters">
                <Col md={expandLeftNav ? 3 : 1 } className="p-0">
                    <LeftNav/>
                </Col>
                <Col md={expandLeftNav ? 9 : 11 } className="p-0">
                    <TopNav 
                        toggleExpandLeftNav={toggleExpandLeftNav}
                        expandLeftNav={expandLeftNav}
                    />
                    <Router>
                        <InboxSection className="no-gutters">
                            <Col md={3}>
                                <Sidebar/>
                            </Col>
                            <Col md={9}>
                                <Switch>
                                    <Route path="/sent" component={SentEmails}/>
                                    <Route path="/" exact component={RecievedEmails}/>
                                </Switch>
                            </Col>
                        </InboxSection>
                    </Router>
                </Col>
            </Row>
        </div>
    )
}

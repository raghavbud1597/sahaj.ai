import React, { useState, useEffect } from 'react'
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
import EmailDetail from '../EmailDetail';
import NewEmail from '../NewEmail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {getEmailList, getSentEmailList} from './../actions';
import {useSelector, useDispatch } from 'react-redux';

const InboxSection = styled(Row)`
    background-color: #F3F3F4;
    padding: 15px;
    height: calc(100% - 70px);
`
const LeftNavBar = styled.div`
    width: ${props => props.expanded ? '300px' : '70px'};
`

export default function Inbox() {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailList());
        dispatch(getSentEmailList());
    }, []);
    const [expandLeftNav, toggleExpandLeftNav] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="vh-100 vw-100">
            <Row className="no-gutters h-100">
                <LeftNavBar expanded={expandLeftNav}>
                    <LeftNav expandLeftNav={expandLeftNav}/>
                </LeftNavBar>
                <Col className="p-0">
                    <TopNav 
                        toggleExpandLeftNav={toggleExpandLeftNav}
                        expandLeftNav={expandLeftNav}
                    />
                    <Router>
                        <InboxSection className="no-gutters">
                            <Col md={3}>
                                <Sidebar handleShow={handleShow}/>
                            </Col>
                            <Col md={9}>
                                <Switch>
                                    <Route path="/sent">
                                        <SentEmails emailList={emails.sentList}/>
                                    </Route>
                                    <Route path="/" exact>
                                        <RecievedEmails emailList={emails.emailList}/>
                                    </Route>
                                    <Route path="/mails/:id" exact component={EmailDetail}/>
                                </Switch>
                            </Col>
                        </InboxSection>
                        <NewEmail show={show} handleClose={handleClose}/>
                    </Router>
                </Col>
            </Row>
        </div>
    )
}

import React, { useEffect } from 'react';
import { 
    InputGroup,
    FormControl,
    Row,
    Col,
    Button 
 } from 'react-bootstrap';
import {getEmailList} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import EmailList from '../EmailList';

export default function RecievedEmails() {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailList());
    }, []);

    return (
        <div>
            <Row className="justify-content-between">
                <Col md={4}>
                    <h1>Inbox <span></span></h1>
                </Col>
                <Col md={4}>
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search Email"
                        aria-label="Search Email"
                        aria-describedby="email-search"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="email-search-btn">Search</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="justify-content-between">
                <Col md={4}>
                    <Button variant="outline-secondary">Refresh</Button>
                    <Button variant="outline-secondary">Refresh</Button>
                    <Button variant="outline-secondary">Refresh</Button>
                    <Button variant="outline-secondary">Refresh</Button>
                </Col>
                <Col md={4} className="text-right">
                    <Button variant="outline-secondary">Refresh</Button>
                    <Button variant="outline-secondary">Refresh</Button>
                </Col>
            </Row>
            <EmailList emailList={emails.emailList}/>
        </div>
    )
}

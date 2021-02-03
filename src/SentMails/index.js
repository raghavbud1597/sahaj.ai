import React, { useEffect } from 'react';
import { 
    InputGroup,
    FormControl,
    Row,
    Col,
    Button 
 } from 'react-bootstrap';
import {getSentEmailList} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import EmailList from '../EmailList';
import styled from 'styled-components';
import Delete from './../images/delete.png';
import Refresh from './../images/refresh.png';

const EmailSection = styled.div`
    background-color: #FFF;
    height: calc(100vh - 100px);
`

const ActionBtn = styled(Button)`
    color: #87898B;
    margin-right: 5px;

`

export default function SentEmails() {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSentEmailList());
    }, []);

    return (
        <EmailSection className="pt-3">
            <Row className="justify-content-between px-3">
                <Col md={4}>
                    <h2 className="font-weight-light">
                        Sent 
                    </h2>
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
            <Row className="justify-content-between mb-4 px-3">
                <Col md={4}>
                    <ActionBtn variant="outline-secondary">
                        <img src={Refresh} alt="Refresh Icon" height="15" width="15" className="mr-1"/>
                        Refresh
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={Delete} alt="Delete Icon" height="15" width="15"/>
                    </ActionBtn>
                </Col>
            </Row>
            <EmailList emailList={emails.sentList}/>
        </EmailSection>
    )
}

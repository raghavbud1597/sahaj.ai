import React, { useEffect } from 'react';
import { 
    InputGroup,
    FormControl,
    Row,
    Col,
    Button 
 } from 'react-bootstrap';
import {getSentEmailList, deleteSentEmail} from './../actions';
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
    color: #343a40;
    margin-right: 5px;
    &:hover {
        background-color: #F0F0F0;
        color: #343a40;
    }
    &:selected {
        background-color: #F0F0F0;
        color: #343a40;
    }
    &:active {
        background-color: #F0F0F0;
        color: #343a40;
    }
`

export default function SentEmails({emailList}) {
    const dispatch = useDispatch();

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
                        <img src={Refresh} alt="Refresh Icon" height="15" width="15" className="mr-1" onClick={()=> dispatch(getSentEmailList())}/>
                        Refresh
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={Delete} alt="Delete Icon" height="15" width="15" onClick={()=> dispatch(deleteSentEmail())}/>
                    </ActionBtn>
                </Col>
            </Row>
            <EmailList emailList={emailList}/>
        </EmailSection>
    )
}

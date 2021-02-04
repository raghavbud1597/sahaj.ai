import React, { useEffect } from 'react';
import { 
    InputGroup,
    FormControl,
    Row,
    Col,
    Button 
 } from 'react-bootstrap';
import {getEmailList, deleteEmail} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import EmailList from '../EmailList';
import styled from 'styled-components';
import Delete from './../images/delete.png';
import Refresh from './../images/refresh.png';
import Left from './../images/left-arrow.png';
import Right from './../images/right-arrow.png';
import View from './../images/view.webp';

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

export default function RecievedEmails() {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailList());
    }, []);

    return (
        <EmailSection className="pt-3">
            <Row className="justify-content-between px-3 no-gutters">
                <Col md={4}>
                    <h2 className="font-weight-light">
                        Inbox
                        <span> ({emails.emailList ? emails.emailList.filter((v) => v.isRead !== true).length : 0})</span>
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
            <Row className="justify-content-between mb-4 px-3 no-gutters">
                <Col md={4}>
                    <ActionBtn variant="outline-secondary">
                        <img src={Refresh} alt="Refresh Icon" height="15" width="15" className="mr-1" onClick={()=> dispatch(getEmailList())}/>
                        Refresh
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={View} alt="View Icon" height="15" width="15"/>
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        !
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={Delete} alt="Delete Icon" height="15" width="15" onClick={()=> dispatch(deleteEmail())}/>
                    </ActionBtn>
                </Col>
                <Col md={4} className="text-right">
                    <ActionBtn variant="outline-secondary">
                        <img src={Left} alt="Left Icon" height="15" width="15"/>
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={Right} alt="Right Icon" height="15" width="15"/>
                    </ActionBtn>
                </Col>
            </Row>
            <EmailList emailList={emails.emailList}/>
        </EmailSection>
    )
}

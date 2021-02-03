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
import styled from 'styled-components';
import Delete from './../images/delete.png';
import Refresh from './../images/refresh.png';
import Left from './../images/left-arrow.png';
import Right from './../images/right-arrow.png';
import View from './../images/view.webp';

const EmailSection = styled.div`
    background-color: #FFF;
`

const ActionBtn = styled(Button)`
    color: #87898B;
    margin-right: 5px;

`

export default function SentEmails() {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailList());
    }, []);

    return (
        <EmailSection className="py-3">
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
                        <img src={View} alt="View Icon" height="15" width="15"/>
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        !
                    </ActionBtn>
                    <ActionBtn variant="outline-secondary">
                        <img src={Delete} alt="Delete Icon" height="15" width="15"/>
                    </ActionBtn>
                </Col>
                <Col md={4} className="text-right">
                    <Button variant="outline-secondary">
                        <img src={Left} alt="Left Icon" height="15" width="15"/>
                    </Button>
                    <Button variant="outline-secondary">
                        <img src={Right} alt="Right Icon" height="15" width="15"/>
                    </Button>
                </Col>
            </Row>
            <EmailList emailList={emails.emailList}/>
        </EmailSection>
    )
}

import React, { useEffect } from 'react';
import { 
    Button,
    Row 
 } from 'react-bootstrap';
import {getEmailList} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const EmailSection = styled.div`
    background-color: #FFF;
    height: calc(100vh - 100px);
`

export default function EmailDetail({match}) {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();
    const email = emails?.emailList?.filter((e) => {
        return e.id == match.params.id;
    });

    useEffect(() => {
        dispatch(getEmailList());
    }, []);

    return (
        <EmailSection className="p-5">
            <h1 className="text-secondary py-3 border-bottom">{email ? email[0]?.title : ''}</h1>
            <h3 className="py-3 border-bottom">{email ? email[0]?.name : ''} <small className="text-muted "> &lt; {email ? email[0]?.email : ''} 	&gt; </small></h3>
            <p>{email ? email[0]?.description : ''}</p>
            <Row className="no-gutters py-3 border-top">
                <Button variant="secondary" className="mr-3">Reply</Button>
                <Button variant="secondary">Forward</Button>
            </Row>
        </EmailSection>
    )
}

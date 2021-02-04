import React, { useState, useEffect } from 'react';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { sendEmail, getSentEmailList } from './../actions'

export default function NewEmail({
    show=false,
    handleClose
}) {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setdesc] = useState('');
    const sendMail = () => {
        const payload = {
            id: emails.sentList.length + 1,
            isRead: true,
            name: email,
            title: subject,
            description: desc,
            email: email,
            time: '',
            isSelected: false,
            isAttachment: false
        }
        dispatch(sendEmail(payload));
        handleClose();
    };

    useEffect(() => {
        dispatch(getSentEmailList());
    }, []);

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>New Mail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="emailAddress">
                        <Form.Label>To</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="Mail Subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Subject" 
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="emailDescription">
                        <Form.Control 
                            as="textarea" 
                            rows={10}
                            value={desc}
                            onChange={e => setdesc(e.target.value)} 
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={sendMail}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

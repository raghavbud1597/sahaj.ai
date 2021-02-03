import React from 'react';
import {
    Modal,
    Button,
    Form
} from 'react-bootstrap';

export default function NewEmail({
    show=false,
    handleClose
}) {
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
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="Mail Subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter Subject" />
                    </Form.Group>
                    <Form.Group controlId="emailDescription">
                        <Form.Control as="textarea" rows={10} />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={handleClose}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

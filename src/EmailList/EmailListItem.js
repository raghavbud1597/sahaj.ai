import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';

export default function EmailListItem({
    Name ='',
    EmailTitle ='',
    Time ='',
    IsChecked = false
}) {
    return (
        <div className="p-1">
            <Row>
                <Col md={1} sm={1}>1 of 1</Col>
                <Col md={4} sm={4}>{Name}</Col>
                <Col md={5} sm={5}>{EmailTitle}</Col>
                <Col md={2} sm={2} className="text-right">{Time}</Col>
            </Row>
        </div>
    )
}

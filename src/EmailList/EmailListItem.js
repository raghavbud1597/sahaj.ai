import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';

export default function EmailListItem({
    name ='',
    title ='',
    time ='',
    IsChecked = false
}) {
    return (
        <div className="p-1">
            <Row>
                <Col md={1} sm={1}>1 of 1</Col>
                <Col md={4} sm={4}>{name}</Col>
                <Col md={5} sm={5}>{title}</Col>
                <Col md={2} sm={2} className="text-right">{time}</Col>
            </Row>
        </div>
    )
}

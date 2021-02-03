import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import styled from 'styled-components';

const Email = styled(Row)`
    ${({ color }) => `background-color:${color};`}
    ${({ weight }) => `font-weight:${weight};`}
`

const emailTitle = styled(Col)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export default function EmailListItem({
    name ='',
    title ='',
    time ='',
    isSelected = false,
    isAttachment,
    isRead = false
}) {
    return (
        <div>
            <Email color={isRead ? '#F9F8F8' : '#fff'} weight={isRead ? '600' : '500'} className="p-1 border-top border-bottom">
                <Col md={1} sm={1}>1 of 1</Col>
                <Col md={4} sm={4}>{name}</Col>
                <Col md={5} sm={5}>{title}</Col>
                <Col md={2} sm={2} className="text-right">{time}</Col>
            </Email>
        </div>
    )
}

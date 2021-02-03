import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {markChecked} from './../actions';
import { Link } from 'react-router-dom';

const Email = styled(Row)`
    ${({ color }) => `background-color:${color};`}
    ${({ weight }) => `font-weight:${weight};`}
`

export default function EmailListItem({
    id=0,
    name ='',
    title ='',
    time ='',
    isSelected = false,
    isAttachment,
    isRead = false
}) {
    const dispatch = useDispatch();
    return (
        <div>
            <Email color={isRead ? '#F9F8F8' : '#fff'} weight={isRead ? '600' : '500'} className="p-3 border-top border-bottom no-gutters">
                <Col md={1} sm={1}>
                    <input
                        type="checkbox"
                        defaultChecked={isSelected}
                        onChange={() => dispatch(markChecked(id))}
                    />
                </Col>
                <Col md={4} sm={4}>
                    <Link to={`/mails/${id}`}>
                        {name}
                    </Link>
                </Col>
                <Col md={5} sm={5}>
                    <Link to={`/mails/${id}`}>
                        {title}
                        </Link>
                </Col>
                <Col md={2} sm={2} className="text-right">{time}</Col>
            </Email>
        </div>
    )
}

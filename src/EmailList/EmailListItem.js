import React from 'react'
import { 
    Row,
    Col 
 } from 'react-bootstrap';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {markChecked, markRead} from './../actions';
import { Link } from 'react-router-dom';
import Attachment from './../images/paperclip.png'

const Email = styled(Row)`
    ${({ color }) => `background-color:${color};`}
    ${({ weight }) => `font-weight:${weight};`}
`

const LinkToEmail = styled(Link)`
    text-decoration: none;
    color: #212529;
    font-weight: 400;
    &:hover {
        text-decoration: none;
    }
`
const TagBadge = styled.span`
    background-color: ${props => props.color};
    margin: 0px 10px;
    padding: 3px;
    border-radius: 4px;
    color: #fff;
`

export default function EmailListItem({
    id=0,
    name ='',
    title ='',
    time ='',
    isSelected = false,
    isAttachment = false,
    isRead = false,
    tag
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
                    <LinkToEmail to={`/mails/${id}`} onClick={()=>dispatch(markRead(id))}>
                        <Row className="no-gutters justify-content-between">
                            <Col>{name}</Col>
                            <Col className="text-right">
                                {tag ? (
                                    <TagBadge color={tag.color}>
                                        {tag.name}
                                    </TagBadge>
                                ): ''}
                            </Col>
                        </Row>
                    </LinkToEmail>
                </Col>
                <Col md={5} sm={5}>
                    <LinkToEmail to={`/mails/${id}`} onClick={()=>dispatch(markRead(id))}>
                    <Row className="no-gutters justify-content-between">
                            <Col>{title}</Col>
                            <Col className="text-right">
                            {isAttachment ? (
                                    <img src={Attachment} alt="Attachment Image" height="20" width="20"/>
                                ): ''}
                            </Col>
                        </Row>
                    </LinkToEmail>
                </Col>
                <Col md={2} sm={2} className="text-right">{time}</Col>
            </Email>
        </div>
    )
}

import React from 'react';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BadgeSpan = styled(Badge)`
    line-height: 17px;
`
const FolderNav = styled(Link)`
    text-decoration: none;

    &:hover{
        text-decoration: none;
    }
`

export default function FolderListItem({
    name='',
    badge,
    count = 0,
    link ="#",
    icon
}) {
    return (
        <FolderNav to={link}>
            <div className="border-bottom d-flex justify-content-between py-1">
                <span className="text-secondary">
                    <img src={icon} height="15" width="15" className="mr-2"/>
                    {name}
                </span>
                {badge ? <BadgeSpan variant={badge}>{count}</BadgeSpan> : ''}
                
            </div>
        </FolderNav>
    )
}

import React from 'react';
import {Badge} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function FolderListItem({
    name='',
    badge,
    count = 0,
    link ="#"
}) {
    return (
        <Link to={link}>
            <div className="border-bottom d-flex justify-content-between">
                <div>
                    {name}
                </div>
                {badge ? <Badge variant={badge}>{count}</Badge> : ''}
                
            </div>
        </Link>
    )
}

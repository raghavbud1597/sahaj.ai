import React from 'react';
import {Badge} from 'react-bootstrap';

export default function FolderListItem({
    name='',
    badge,
    count = 0
}) {
    return (
        <div className="border-bottom d-flex justify-content-between">
            <div>
                {name}
            </div>
            {badge ? <Badge variant={badge}>{count}</Badge> : ''}
            
        </div>
    )
}

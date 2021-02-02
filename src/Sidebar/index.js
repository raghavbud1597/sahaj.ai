import React from 'react'
import { 
    Button 
 } from 'react-bootstrap';

export default function Sidebar() {
    return (
        <div className="px-3">
            <Button variant="primary" size="lg" block>
                Compose Mail
            </Button>
        </div>
    )
}

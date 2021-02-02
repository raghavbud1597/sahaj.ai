import React from 'react'
import { 
    Button 
 } from 'react-bootstrap';
import FolderListItem from './FolderListItem';
import folderList from './../Constants/FolderList'
import Categories from './Categories';

export default function Sidebar() {
    return (
        <div className="px-3">
            <Button variant="primary" size="lg" block>
                Compose Mail
            </Button>
            <p className="text-capitalize my-2">folders</p>
            {folderList ? folderList.map(item => {
                return (
                    <FolderListItem
                        name={item.name}
                        key={item.id}
                        badge={item.badge}
                        count={item.count}
                    />
                )
            }) : '' }
            <p className="text-capitalize my-2">Categories</p>
            <Categories/>
        </div>
    )
}

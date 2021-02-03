import React from 'react'
import { 
    Button 
 } from 'react-bootstrap';
import FolderListItem from './FolderListItem';
import folderList from './../Constants/FolderList'
import Categories from './Categories';
import Labels from './Labels';

export default function Sidebar({
    handleShow
}) {
    return (
        <div className="px-3">
            <Button variant="primary" size="lg" block onClick={handleShow}>
                Compose Mail
            </Button>
            <p className="font-weight-bold my-2 text-secondary">FOLDERS</p>
            {folderList ? folderList.map(item => {
                return (
                    <FolderListItem
                        name={item.name}
                        key={item.id}
                        badge={item.badge}
                        count={item.count}
                        link={item.link}
                    />
                )
            }) : '' }
            <p className="font-weight-bold my-2 text-secondary">CATEGORIES</p>
            <Categories/>
            <Labels/>
        </div>
    )
}

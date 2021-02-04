import React, { useEffect } from 'react'
import { 
    Button 
 } from 'react-bootstrap';
import FolderListItem from './FolderListItem';
import folderList from './../Constants/FolderList'
import Categories from './Categories';
import Labels from './Labels';
import {useSelector, useDispatch } from 'react-redux';
import {getEmailList} from './../actions';

export default function Sidebar({
    handleShow
}) {
    const emails = useSelector(state => state.emails);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEmailList());
    }, []);

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
                        count={(item.name == 'Inbox') ? (emails.emailList ? emails.emailList.filter((v) => v.isRead !== true).length : 0) : item.count}
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

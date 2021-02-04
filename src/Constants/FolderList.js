import Inbox from './../images/inbox.png';
import Message from './../images/message.png';
import Star from './../images/star.png';
import Draft from './../images/content-writing.png';
import Delete from './../images/delete.png';


const folderList = [
    {
        id: 1,
        name: 'Inbox',
        badge: 'warning',
        count: '16',
        link: '/',
        icon: Inbox
    },
    {
        id: 2,
        name: 'Sent Mail',
        link: '/sent',
        icon: Message
    },
    {
        id: 3,
        name: 'Important',
        icon: Star
    },
    {
        id: 4,
        name: 'Drafts',
        badge: 'danger',
        count: '2',
        icon: Draft
    },
    {
        id: 5,
        name: 'Trash',
        icon: Delete
    }
];

export default folderList;
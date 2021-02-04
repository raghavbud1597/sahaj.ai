import React from 'react'
import EmailListItem from './EmailListItem'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
    height: calc(100% - 135px);
    overflow: scroll;
`

export default function EmailList({emailList}) {
    return (
        <List>
            {emailList ? emailList.map(item => {
                return (
                    <EmailListItem
                        id={item.id}
                        name={item.name}
                        title={item.title}
                        key={item.id}
                        time={item.time}
                        isRead={item.isRead}
                        isSelected={item.isSelected}
                        isAttachment={item.isAttachment}
                        tag={item.tag}
                    />
                )
            }) : '' }
        </List>
    )
}

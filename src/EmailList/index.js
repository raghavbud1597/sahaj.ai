import React from 'react'
import EmailListItem from './EmailListItem'

export default function EmailList({emailList}) {
    return (
        <div className="overflow-auto">
            {emailList ? emailList.map(item => {
                return (
                    <EmailListItem
                        name={item.name}
                        title={item.title}
                        key={item.id}
                        time={item.time}
                        isRead={item.isRead}
                        isSelected={item.isSelected}
                        isAttachment={item.isAttachment}
                    />
                )
            }) : '' }
        </div>
    )
}

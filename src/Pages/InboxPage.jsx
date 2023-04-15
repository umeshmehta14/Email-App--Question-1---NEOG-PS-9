import React, { useContext } from 'react'
import { DataContext } from '../main'
import { NavLink } from 'react-router-dom';

const InboxPage = () => {
    const {mailData,HandleMarkAsRead} = useContext(DataContext);
    const unreadMails = mailData.reduce((acc, {read})=> read ? acc+1:acc,0)
    const readMails = mailData.reduce((acc, {read})=> !read ? acc+1:acc,0)
   
  return (
    <div>
      <h1>Inbox Page</h1>
      <p>Unread Emails:{unreadMails}</p>
      <p>Read Emails:{readMails}</p>
      <ul>
        {
            mailData.map(({id, subject,read}) => <li key={id}> 
            <NavLink to={`/emailpage/${id}`}>{subject}</NavLink>
            {!read && <button onClick={()=>HandleMarkAsRead(id)}>Mark As Read</button>}
            </li>)
        }
      </ul>
    </div>
  )
}

export default InboxPage

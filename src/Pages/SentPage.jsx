import React, { useContext } from 'react'
import { DataContext } from '../main';
import { NavLink } from 'react-router-dom';

const SentPage = () => {
  const {sentEmails} = useContext(DataContext);

  return (
    <div>
      <h1>Sent Page</h1>
      <ul>
        {
            sentEmails.map(({id, subject}) => <li key={id}> 
            <NavLink to={`/emailpage/${id}`}>{subject}</NavLink>
            </li>)
        }
      </ul>
    </div>
  )
}

export default SentPage

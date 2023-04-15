import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../main';

const EmailPage = () => {
  const {emailId} = useParams();
  const {mailData,sentEmails} = useContext(DataContext);
  // console.log(sentEmails)
  const selectedItem = [...mailData, ...sentEmails].find(({id})=> id === parseInt(emailId));
  return (
    <div>
      <h1>{selectedItem.subject}</h1>
      <p>{selectedItem.sender ? `From:${selectedItem.sender}`: `To:${selectedItem.to}`}</p>
      <p>Message:{selectedItem.message}</p>
    </div>
  )
}

export default EmailPage

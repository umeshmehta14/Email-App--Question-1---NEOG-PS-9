import React, { createContext, useEffect, useState } from 'react'
import { fakeFetch } from '../Data/Data';


export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [mailData, setMailData] = useState([]);
    const [sentEmails, setSentEmails] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async()=>{
        try {
            const {data:{emails,sentEmails}} = await fakeFetch("https://example.com/api/allemails");
            setMailData(emails);
            setSentEmails(sentEmails);
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    }
    console.log(sentEmails)

    const HandleMarkAsRead = (id) =>{
        const updatedMails = mailData.map((currElement)=> currElement.id === id ? {...currElement, read : true}: currElement);
        setMailData( updatedMails);
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <DataContext.Provider value={{mailData,sentEmails,loading,HandleMarkAsRead}}>
      {children}
    </DataContext.Provider>
  )
}


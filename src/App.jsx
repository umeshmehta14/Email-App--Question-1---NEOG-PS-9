import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmailPage from './Pages/EmailPage'
import InboxPage from './Pages/InboxPage'
import LandingPage from './Pages/LandingPage'
import Header from './Components/Header'
import SentPage from './Pages/SentPage'
import { useContext } from 'react'
import { DataContext } from './main'

// Create an Email app in React with different routes:

// Landing Page - It shows a heading and two routes - Inbox and Sent
// Inbox Page - It should have the list of all received emails.
// Individual Email Page - It should show content of that particular opened email.
// Show two counters on the top of Inbox page for number for Read emails and Unread emails. Have a button for each email in the inbox email listing page for emails which have read as false. If you mark an email as read, the counter value for read and unread emails should change. Do this using context.
// Sent Page - It should have the list of all sent emails similar to inbox page but without any buttons to mark as read. If you click on any of the sent emails, it should open that individual email in a unique route.

function App() {
  const {loading} = useContext(DataContext);

  return (
     <div className="App">
      {loading ?"Loading....": <Header/>}
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/inboxpage" element={<InboxPage/>}/>
      <Route path="/emailpage/:emailId" element={<EmailPage/>}/>
      <Route path="/sentpage" element={<SentPage/>}/>
      </Routes>
    </div>
  )
}

export default App

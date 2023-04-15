import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h1>My Mail Box</h1>

    <nav>
      <ul>
        <li>
      <NavLink to="/inboxpage">Inbox</NavLink>
        </li>
        <li>
      <NavLink to="/sentpage">Sent</NavLink>
        </li>

      </ul>
    </nav>
    </>
  )
}

export default Header

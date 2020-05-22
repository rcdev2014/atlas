import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="custom-sidebar">
      <h2 className="brand-name">ATLAS</h2>
      <Link to="/dashboard" className="item">
        <i className="shopping cart icon"></i> Accounts
      </Link>
    </div>
  )
}

export default Sidebar

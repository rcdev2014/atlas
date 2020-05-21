import React from 'react'

const Header = () => {
  return (
    <div className="custom-header">
      <div className="ui inline dropdown">
        <div className="text">
          <img
            className="ui avatar image"
            src="https://api.adorable.io/avatars/65/human.png"
            alt="Avatar"
          />
          Jane Doe
        </div>
        <i className="dropdown icon"></i>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="ui purple pointing menu">
      <NavLink exact to="/" className="item">Home</NavLink>
      <NavLink exact to="/lessons" className="item">Lesson List</NavLink>
      <NavLink exact to="/add" className="item">Add a Lesson</NavLink>
      <div className="right menu">
        <div className="item">
          <div className="ui transparent icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar
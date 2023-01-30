import React from 'react';
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'My Profile',
    }
  ];
  return (
    <nav className="NavBar">
      <ul className="MenuNav">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} activeClassName="active-link" exact>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
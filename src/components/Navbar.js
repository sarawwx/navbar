import React from 'react';

const Navbar = () => {
  return (
    <div>
        <div className="logo">
          Logo
        </div>
        <nav className="item">
          <ul className='ul'>
              <li>
                <Link to='/'>Home</Link>
              </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar
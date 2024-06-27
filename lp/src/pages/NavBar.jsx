import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles/navbar.css'
const NavBar = () => {
    const[isMobile,setIsMobile]=useState(false);
  return (
   <>
 <nav className='nav'>
 <Link to='/hero' className='nav-logo text-decoration-none text-white'>Hero</Link>
<ul className={isMobile?'nav-links-mob':'nav-links'}>
    <Link to='/' className='home'><li>Home</li></Link>
    <Link to='/images'  className='images'><li>Image</li></Link>
    <Link to='/todo'  className='todo'><li>Todo</li></Link>
    <Link to='/gallery'  className='gallery'><li>Gallery</li></Link>
    <Link to='/register'  className='register'><li>Register</li></Link>
</ul>
<Link className='mob-icons' onClick={()=>setIsMobile(!isMobile)}>
    {isMobile?
<i className="bi bi-x-lg"></i>:
<i className="bi bi-list"></i>
}
</Link>
</nav>
   </>
  )
}

export default NavBar
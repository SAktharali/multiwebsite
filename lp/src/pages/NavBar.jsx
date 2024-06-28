import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './styles/navbar.css'

const NavBar = ({setShowModal}) => {
    // const[isMobile,setIsMobile]=useState(false);
    
  return (
   <>
 {/* <nav className='nav'>
 <Link to='/hero' className='nav-logo text-decoration-none text-white'>Hero</Link>
<ul className={isMobile?'nav-links-mob':'nav-links'} style={{listStyle:'none'}}>
    <Link to='/' className='home text-decoration-none'><li>Home</li></Link>
    <Link to='/images'  className='images text-decoration-none'><li>Image</li></Link>
    <Link to='/todo'  className='todo text-decoration-none'><li>Todo</li></Link>
    <Link to='/gallery'  className='gallery  text-decoration-none'><li>Gallery</li></Link>
    <Link to='/register'  className='register  text-decoration-none' onClick={() => setShowModal(true)}><li>Register</li></Link>
</ul>
<Link className='mob-icons' onClick={()=>setIsMobile(!isMobile)}>
    {isMobile?
<i className="bi bi-x-lg"></i>:
<i className="bi bi-list"></i>
}
</Link>
</nav> */}
<nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <Link to='/hero' className="navbar-brand">HERO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
          <Link to='/' className="nav-link text-white text-center" aria-current="page">
        <li className="nav-item">
Home
        </li>
          </Link>
          <Link to='/images' className="nav-link text-white text-center" aria-current="page">
        <li className="nav-item">
Images
        </li>
          </Link>
          <Link to='/todo' className="nav-link text-white text-center" aria-current="page">
        <li className="nav-item">
Todo
        </li>
          </Link>
          <Link to='/gallery' className="nav-link text-white text-center" aria-current="page">
        <li className="nav-item">
Gallery
        </li>
          </Link>
          <Link to='/register' className="btn btn-primary text-white text-center" aria-current="page" onClick={() => setShowModal(true)}>
        <li className="nav-item">
Sign up
        </li>
          </Link>
   
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}

export default NavBar
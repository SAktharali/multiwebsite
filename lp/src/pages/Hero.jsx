import React, { useState, useEffect } from 'react';
import './styles/hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setShowNavBar(true);
    } else {
      setShowNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section style={{ background: 'rgb(2, 34, 46)', width: '100%', minHeight: '100vh' }}>
        {showNavBar && (
          <nav className="navbar  navbar-expand-lg bg-dark border-bottom border-body sticky-navbar" data-bs-theme="dark">
            <div className="container-fluid">
              <Link to='/hero' className="navbar-brand">HERO</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to='/' className="nav-link text-white text-center" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/images' className="nav-link text-white text-center" aria-current="page">Images</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/todo' className="nav-link text-white text-center" aria-current="page">Todo</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/gallery' className="nav-link text-white text-center" aria-current="page">Gallery</Link>
                  </li>
                    <Link to='/register' className="btn btn-primary text-white text-center" aria-current="page">Sign up</Link>
                </ul>
              </div>
            </div>
          </nav>
        )}
        <div className='container hero-container'>
          <div className="typing-text">
            SMILIGENCE
          </div>
        </div>
        <p>This is some additional content to enable scrolling.</p>
        <p>Add more content here to ensure the page is scrollable.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
      </section>
    </>
  );
}

export default Hero;


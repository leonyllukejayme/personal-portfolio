import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Navbar() {
    const [color, setColor] = useState(false);

    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
        <nav className={color ? 'navbar navbar-expand-lg fixed-top header-bg' : 'navbar navbar-expand-lg fixed-top'}>
            <div className='container-fluid mx-5 my-2'>
                <Link to="/" className=' navbar-brand'><img src={logo} alt="</>" width={46} /></Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link to="/" className='nav-link'>Home</Link></li>
                    <li className='nav-item'><Link to="/about" className='nav-link'>About</Link></li>
                    <li className='nav-item'><Link to="/projects" className='nav-link'>Projects</Link></li>
                    {/* <li className='nav-item'><Link to="" className='nav-link'>Contact</Link></li> */}
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
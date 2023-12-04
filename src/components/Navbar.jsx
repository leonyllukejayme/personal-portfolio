import React, { useState } from 'react';

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
                <a className='h1 navbar-brand' style={{fontSize: '2rem'}} href="">Portfolio</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a className='nav-link' href="">Home</a></li>
                    <li className='nav-item'><a className='nav-link' href="">About</a></li>
                    <li className='nav-item'><a className='nav-link' href="">Projects</a></li>
                    <li className='nav-item'><a className='nav-link' href="">Contact</a></li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navbar
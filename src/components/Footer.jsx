import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    const year = new Date();

  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">© {year.getFullYear()}</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
      <li className='ms-3'><a className='text-body-secondary' href="https://www.linkedin.com/in/leonyl-luke-jayme-bb1188285/"target='_blank'><FaLinkedin style={{fontSize:"2rem"}}/></a></li>
      <li className='ms-3'><a className='text-body-secondary' href="https://github.com/leonyllukejayme"target='_blank'><FaGithub style={{fontSize:"2rem"}}/></a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer
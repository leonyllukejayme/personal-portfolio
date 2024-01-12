import React from 'react'

function Footer() {
    const year = new Date();

  return (
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <span className="mb-3 mb-md-0 text-body-secondary">© {year.getFullYear()}</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
      <li className='ms-3'><a className='text-body-secondary' href="https://www.linkedin.com/in/leonyl-luke-jayme-bb1188285/"><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
      <li className='ms-3'><a className='text-body-secondary' href="https://github.com/leonyllukejayme"><i className="fa-brands fa-github fa-2xl"></i></a></li>
    </ul>
  </footer>
</div>
  )
}

export default Footer
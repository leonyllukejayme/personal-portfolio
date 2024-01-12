import React from 'react'
import pic from '../assets/pro-pic.jpg'

function Hero_about() {
  return (
    <div className="px-4 py-5 my-5 text-center bg-gradient">
    <img className="d-block mx-auto mb-4" src={pic} alt="" width="150" height="150" style={{borderRadius: '50%'}} />
    <h1 className="display-5 fw-bold text-body-emphasis">About Me</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">I'm a Highly motivated aspiring web developer with a passion for creating responsive and visually appealing websites, equipped with a solid foundation in HTML, CSS, and JavaScript, and a strong commitment to continuous learning and innovation.</p>
    </div>
  </div>
  )
}

export default Hero_about
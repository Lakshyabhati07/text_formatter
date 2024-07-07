import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <a className="navbar-brand" href="/">{prop.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{prop.abouttext}</a>
          </li>
          
        </ul>
        

      
      <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'} mx-4`}>
        <input className="form-check-input" type="checkbox" role="switch" onClick={prop.togglemode} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.changeMode}</label>
      </div>
       <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      
    </div>
    </nav>
)}
/*
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    abouttext: PropTypes.string.isRequired ,
    mode:PropTypes.string.isRequired
  
} */


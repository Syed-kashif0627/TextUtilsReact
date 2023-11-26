import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                </li>
            
                </ul>

                <div className={`d-flex align-items-center text-${props.mode ==='light'?'dark':'light'}`}>
                    <div className="theme-circle" style={{backgroundColor: 'grey'}} onClick={() => props.toggleMode('#000')}></div>
                    <div className="theme-circle" style={{backgroundColor: 'Blue'}} onClick={() =>props.toggleMode('#042743')}></div>
                    <div className="theme-circle" style={{backgroundColor: 'green'}} onClick={() => props.toggleMode('#145503')}></div>
                    <div className="theme-circle" style={{backgroundColor: 'purple'}} onClick={() => props.toggleMode('#380455')}></div>
                  
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?'Enable dark mode':'Enable light mode'}</label>
                </div>
                
            </div>
            </div>
        </nav>
        </>
        
  )

}
Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

Navbar.defaultProps={
    title:"set the title",
    about:"set about"
}

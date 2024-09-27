import React from 'react'
import './Index.css'
import {Link, Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <div id='parent'>
        <div id='left' >
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <div id='right'>
            <Outlet/>
        </div>

    </div>
  )
}

export default Home
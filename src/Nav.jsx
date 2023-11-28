import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div id="navv">
     <ul className="nav justify-content-center nav nav-underline navbar navbar-expand-lg bg-body-tertiary">
   <li className="nav-item">
   <Link className="nav-link" to={"/"}>All</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to={"/fsd"}>Full Stack Development</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to={"/ds"}>Data Structure</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link " to={"/cyber"}>Cyber Security</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link " to={"/career"}>Career</Link>
  </li>
</ul>
    </div>
  )
}

export default Nav
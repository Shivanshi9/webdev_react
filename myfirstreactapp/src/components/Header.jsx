import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
    </div>
  )
}

export default Header
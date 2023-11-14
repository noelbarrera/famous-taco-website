import { useState } from "react";
import { Link} from 'react-router-dom';
import "../styles/Navbar.css"


const Navbar = () => {
  const [click, setClick] = useState(false);

  console.log('click state', click)
  return (
    <nav className='nav'>
      <div className='nav-title'>
        <div className="logo">
          <Link to="/">
          <p className="logo-title">The Famous Taco</p>
          <p className="logo-desc">Mexican Food</p>
          </Link>
        </div>
      </div>
    <div className={click ? 'nav-links active ': 'nav-links'}> 
      <ul>
        <li onClick={()=> setClick(!click)}>
          <Link to="/about">
          About
          </Link>
        </li>
        <li onClick={()=> setClick(!click)}>
          <Link to="/contact">
          Contact
          </Link>
        </li>
        <li onClick={()=> setClick(!click)}>
          <Link to="/menu">
          Menu
          </Link>
        </li>
        <li onClick={()=> setClick(!click)}>
          <Link to="/join">
          Join Our Team
          </Link>
        </li>
      </ul>
    </div>
          <div className={click ? "hamburger active": "hamburger"} onClick={()=> setClick(!click) }>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
    </nav>
  )
}

export default Navbar
import "../styles/Navbar.css"
import { Link} from 'react-router-dom';

const Navbar = () => {
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
    <div className='nav-links'> 
      <ul>
        <li>
          <Link to="/about">
          About
          </Link>
        </li>
        <li>
          <Link to="/contact">
          Contact
          </Link>
        </li>
        <li>
          <a href="/menu">
          Menu
          </a>
        </li>
        <li>
          <Link to="/join">
          Join Our Team
          </Link>
        </li>
        <li>
          <Link to="/locations">
          Locations
          </Link>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
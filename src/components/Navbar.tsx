import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-title'>
        Famous Taco
      </div>
    <div className='nav-links'> 
      <ul>
        <li>
          <a href="">
          About
          </a>
        </li>
        <li>
          <a href="">
          Contact
          </a>
        </li>
        <li>
          <a href="">
          Menu
          </a>
        </li>
        <li>
          <a href="">
          Join Our Team
          </a>
        </li>
        <li>
          <a href="">
          Locations
          </a>
        </li>
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
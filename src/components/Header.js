
import { Link } from "react-router-dom";
import { FaScissors } from "react-icons/fa6";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaScissors />
        <span>Salon Beauty</span>
      </div>
      <nav className="nav">
        <Link to="/services">სერვისები</Link>
        <Link to="/booking">დაჯავშნა</Link>
        <Link to="/contact">კონტაქტი</Link>
        

      </nav>
    </header>
  );
}

export default Header;

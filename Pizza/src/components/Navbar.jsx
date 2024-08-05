import React from 'react'
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
// import ReorderIcons from '@mui/icons-material/Reorder';
import ReorderIcon from '../assets/reorder.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} alt="lonak a fasza"/>
            <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightSide'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button>
                <img src={ReorderIcon} alt='lofasz'/>
            </button>
        </div>
    </div>
  )
}

export default Navbar
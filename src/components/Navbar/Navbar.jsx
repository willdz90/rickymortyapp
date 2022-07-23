import React from 'react';
import './Navbar.css';
import Ifpd2 from '../../assets/Ifpd2.gif';
import Ifpd from '../../assets/Ifpd.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='header'>
          <Link to="/">
            <img src={Ifpd2} alt="rickandmorty" className='logo'/>
          </Link>
            <img src={Ifpd} alt="rickandmorty" className='logoName'/>
    </div>
  )
}

export default Navbar;
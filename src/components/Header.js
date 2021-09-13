import React from 'react'
import '../css/header.scss'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { navContents } from '../data';
const Header = () => {
    return (
        <header>
        <nav>
            <div class="logo">
                <img src={logo} alt="" />
                <h1>MIIC</h1>
            </div> 
            <ul>
                {
                  navContents.map(({name, link}, index)=><li key={index}>
                    <Link 
                      className={(name.toLowerCase()==='login' || name.toLowerCase()==='apply')?'navItems btn' : 'navItems'} 
                      to={link}>{name}
                    </Link>
                  </li>)
                }
            </ul>
        </nav>
        <div class="carousel">
            
        </div>
    </header>
    )
}

export default Header

import React from 'react'
import '../css/header.scss'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const navbar = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'About Us',
        link: '/aboutus',
    },
    {
        name: 'Mentors',
        link: '/mentors',
    },
    {
        name: 'Incubation',
        link: '/incubation',
    },
    {
        name: 'Programs',
        link: '/programs',
    },
    {
        name: 'Ecosystem',
        link: '/ecosystem',
    },
    {
        name: 'Idea Factory',
        link: '/ideafactory',
    },
    {
        name: 'Login',
        link: '/login',
    },
    {
        name: 'Apply',
        link: '/apply',
    }
];
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
                  navbar.map(({name, link}, index)=><li key={index}>
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

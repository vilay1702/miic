import React from 'react'
import '../css/header.scss'

const Header = () => {
    return (
        <header>
        <nav>
            <div class="logo">
                <img src="./images/logo.png" alt="" />
                <h1>MIIC</h1>
            </div> 
            <ul>
                <li><a class="navItems active" href="#">Home</a></li> 
                <li><a class="navItems" href="#">About Us</a></li>    
                <li><a class="navItems" href="#">Mentors</a></li>     
                <li><a class="navItems" href="#">Incubation</a></li>  
                <li><a class="navItems" href="#">Programs</a></li>    
                <li><a class="navItems" href="#">Ecosystem</a></li>   
                <li><a class="navItems" href="#">Idea Factory</a></li>
                <li><a class="navItems btn" href="#">Login</a></li>   
                <li><a class="navItems btn" href="#">Apply</a></li>   
            </ul>
        </nav>
        <div class="carousel">
            
        </div>
    </header>
    )
}

export default Header

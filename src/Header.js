import React from 'react'
import logo from './image/10xLogo.JPG'

export default function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <img src={logo} alt="Logo" className="logo" />
                    {/* <input type="text" placeholder="Search" className="search-bar" /> */}
                </div>
                {/* <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav> */}
                <a className='register-link' href="https://docs.google.com/forms/d/1eWSaQmFg99aFUVXFgu6fwWytLmNcWH6LLZJlla1jqCM/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" >
                Register here
                    {/* <div className='register-link'> Register here */}
                        {/* <a href="https://docs.google.com/forms/d/1eWSaQmFg99aFUVXFgu6fwWytLmNcWH6LLZJlla1jqCM/viewform?edit_requested=true" target="_blank" rel="noopener noreferrer" >Register here</a> */}
                    {/* </div> */}
                </a>
            </div>
        </>

    )
}

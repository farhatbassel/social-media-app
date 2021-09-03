import React from 'react'
import './navbar.scss'
import { Search, Person, Message, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <nav className='navbar-wrapper'>
            <div className="navbar-left">
                <Link to='/' style={{ textDecoration: "none", color: 'white' }}>
                    <div><span className="logo">BF</span></div>
                </Link>
            </div>
            <div className="navbar-center">
                <div className="search-bar">
                    <Search className='search-icon' />
                    <input type="text" placeholder="Search for friends, posts ..." />
                </div>
            </div>
            <div className="navbar-right">
                <div className="links">
                    <span className="link"><h2>home</h2></span>
                    <span className="link"><h2>timeline</h2></span>
                </div>
                <div className="icons">
                    <div className="navbar-icons" id="profile">
                        <Person />
                        <span className='navbar-icon-badge'>1</span>
                    </div>
                    <div className="navbar-icons" id="messages">
                        <Message />
                        <span className='navbar-icon-badge'>2</span>
                    </div>
                    <div className="navbar-icons" id="notification">
                        <Notifications />
                        <span className='navbar-icon-badge'>2</span>
                    </div>
                    <img src={`${PF}person/1.jpeg`} alt="" className="navbar-img" />
                </div>
            </div>
        </nav >
    )
}

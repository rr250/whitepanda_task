import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from'./SignedInLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper white darken-3">
            <div className="container" style={{position: "absolute",left: 210}}>
                <Link to='/' className="brand-logo black-text left"><img src="images\logo.PNG" alt="img" /></Link>
                <SignedInLinks/>
            </div>
        </nav>
    )
}

export default Navbar;
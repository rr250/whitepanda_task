import React from 'react'
import {NavLink} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add( fab)
const Footer = () => {
    return (
        <footer class="page-footer transparent" style={{paddingRight:10}}>
            <div class="container center grey-text">
                <br />
                <br />       
                <FontAwesomeIcon icon={['fab','twitter']} size="3x" fixedWidth />
                <FontAwesomeIcon icon={['fab','linkedin-in']} size="3x" fixedWidth />                
                <FontAwesomeIcon icon={['fab','instagram']} size="3x" fixedWidth />
                <FontAwesomeIcon icon={['fab','facebook-f']} size="3x" fixedWidth />
                <br />
                <br />
                <div class="grey-text">Copyright © 2019 White Panda Media Pvt. Ltd.</div>
                <div class="grey-text">All rights reserved</div>
                <br />
                <div><NavLink to="/" class="grey-text" style={{textDecoration: "underline"}}>Privacy policy</NavLink> | <NavLink to="/" class="grey-text" style={{textDecoration: "underline"}}>Terms of service</NavLink> | <NavLink to="/" class="grey-text" style={{textDecoration: "underline"}}>Service Agreement</NavLink> | <NavLink to="/" class="grey-text" style={{textDecoration: "underline"}}>Contact us</NavLink></div>
                <br />
            </div>
        </footer>
    )
}

export default Footer;
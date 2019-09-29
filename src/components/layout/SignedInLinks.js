import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/' className="black-text text-lighten-1"><i class="material-icons notif">notifications_none</i><small class="notification-badge">699</small></NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-2'>AB</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;
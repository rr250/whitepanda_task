import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ProjectList from '../project/ProjectList'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container" >
                <h3>Content Store</h3>
                <br />
                <br />
                <div class="container grey col m12 lighten-5">
                    <h5 class="bold cyan-text lighten-1">Got bulk orders of almost similar orders ? Fill the order brief in an excel sheet</h5>
                    <p class="grey-text" style={{width:"80%"}}>If you're wondering about an easy way to place orders in large numbers, we provide a way customized just for that.<br />
                    Download our excel sheet, and feel the order brief in the prescibed format and submit. In case you need any help, <NavLink to='/' class="grey-text" style={{textDecoration: "underline"}}>we are just a click away to assist you in placing your order</NavLink></p>
                    <NavLink to='/' className='btn transparent cyan-text z-depth-0 lighten-2' style={{border:"2px solid #5DBCD2", textTransform:'capitalize', borderRadius:5, marginBottom:10}}>Order via Excel Sheet</NavLink>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col s12 m12">
                        <ProjectList/>
                    </div>
                </div>
            </div>  
        )  
    }
}

export default Dashboard
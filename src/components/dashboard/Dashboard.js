import React, { Component } from 'react';
import ProjectList from '../project/ProjectList'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <h3>Content Store</h3>
                <br />
                <br />
                <h5 class="bold cyan-text lighten-1">Got bulk orders of almost similar orders ? Fill the order brief in an excel sheet</h5>
                <p>If you're wondering about an easy way to place orders in large numbers, we provide a way customized just for that.
                Download our excel sheet, and feel the order brief in the prescibed format and submit. In case you need any help, we are just a click away to assist you in placing your order</p>
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
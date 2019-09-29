import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import VerticalTabs from './components/layout/VerticalTabs'
import Dashboard from './components/dashboard/Dashboard'
import Footer from './components/layout/Footer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="row">
            <div className="col s12 m1">
                <VerticalTabs/>
            </div>
            <div className="col s12 m11">
                <Dashboard/>
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

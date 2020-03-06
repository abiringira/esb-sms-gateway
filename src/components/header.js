import React, {Component} from 'react';

import logo from './images/bk_image.png';


import  '../App.css'

class Header extends Component {

    render () {
        return (
            <div className="App-card">
       <nav>
         <ul className="nav-ul-nav-list">
             <li className="li-nav-button">
     <img src={logo}  alt="logo" />
     </li>
     <li className="left-nav">
     <button  ><a href="/">Log Out </a></button> 
     </li>
     
     </ul>

     
     </nav>
      <div className="sidenav">
          <ul  className="nav-ul-list">
              <li className="nav-item"><a href="/dashboard" >Dashboard</a></li>
              <li className="nav-item"><a href="/dashboard">Users </a></li>
              <li className="nav-item"><a href="/dashboard">Notification </a></li>
              <li className="nav-item" ><a href="/dashboard" > Application</a></li>
          </ul>

      </div>
     </div>
        )
    }



}

  export default Header;
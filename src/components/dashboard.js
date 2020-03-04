import React from 'react';
import logo from './images/bk_image.png';
import appLogo from './images/bk5_image.png';
import  '../App.css'


function dashboard() {
  return (

    <React.Fragment>
     
     <div className="App-card">
       <nav>
     <img src={appLogo}  alt="logo" />
     </nav>
      <div className="sidenav">

      </div>
     </div>

        
     <div className="App">
      <footer className="App-header">
        <img src={logo}  alt="logo" />
        <p>
         <code>Notification Service</code> 
        </p>
     
      </footer>
    </div>
    

     
  
    
    </React.Fragment>
  );
}

export default dashboard
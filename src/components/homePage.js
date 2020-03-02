import React from 'react';
import logo from './images/bk_image.png';
import appLogo from './images/bk5_image.png';
import  '../App.css'


function homePage() {
  return (

    <React.Fragment>
      <div className="App">
        <div className="App-card">
        <img src={appLogo}  alt="logo" />

        </div>
        
      </div>
    <div className="App">
      <footer className="App-header">
        <img src={logo}  alt="logo" />
        <p>
         <code>Sms Gateway</code> 
        </p>
     
      </footer>
    </div>
    </React.Fragment>
  );
}

export default homePage
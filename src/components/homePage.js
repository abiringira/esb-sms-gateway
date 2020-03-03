import React from 'react';
import logo from './images/bk_image.png';
import appLogo from './images/bk5_image.png';
import  '../App.css'


function homePage() {
  return (

    <React.Fragment>
      {/* <div className="App">
        <div className="App-card">
        <img src={appLogo}  alt="logo" />

        </div>
        
      </div> */}

      <div className="App-login" >
       
     
<div class="container" id="container">

	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="/" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="/" class="social"><i class="fab fa-linkedin-in"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="hhtp/social">Forgot your password?</a>
			<button>Sign In</button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			
			<div class="overlay-panel overlay-right">
				<h1>Hello, Developers!</h1>
				<p>Welcome to sms gateway platform  </p>
			
			</div>
		</div>
	</div>
</div>
        
      </div>
    <div className="App">
      <footer className="App-header">
        <img src={logo}  alt="logo" />
        <p>
         <code>Sms Service</code> 
        </p>
     
      </footer>
    </div>
    </React.Fragment>
  );
}

export default homePage
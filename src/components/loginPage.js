import React from 'react';
import logo from './images/bk_image.png';
import Footer from './footer'
import  '../App.css'


function loginPage() {
  return (

    <React.Fragment>
     
    
       <div className="App-card">
       <nav>
     <img src={logo}  alt="logo" />
     </nav>
     </div>
    
     

      <div className="App-login" >
       
     
<div className="container" id="container">

	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="/" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="/" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="/" className="social"><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span> use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="hhtp/social">Forgot your password?</a>
			<button ><a href="/dashboard">Sign In </a></button> 
		</form>
	</div>

	<div className="overlay-container">

		<div className="overlay">
			
			<div className="overlay-panel overlay-right">
				<h1>Hello, Developers!</h1>
				<p>Welcome to sms gateway platform  </p>
			
			</div>

		</div>

	</div>

</div>
        
      </div>

   <Footer/>

    </React.Fragment>
  );
}

export default loginPage
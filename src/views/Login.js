import React from 'react';
import "../shards-dashboard/styles/index.css";



function loginPage() {
   return (

    <React.Fragment>
     

    
       <div className="body1">

       <div className="App-login1" >
       
     
 <div class="container1" id="container1">

	<div class="form-container1 sign-in-container1">
 		<form action="#" className="form1">
			
			<div class="social-container1">
				{/* <a href="/" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
				<a href="/" class="social"><i class="fab fa-linkedin-in"></i></a> */}
<img
                id="main-logo"

                style={{ maxWidth: "210px" }}
                src={require("../images/avatars/bk6_image.png")}
                alt="logo"
              />
			</div>
			<h1>Sign in</h1>

		<input className="input1" type="email" placeholder="Email" />
			<input class="input1" type="password" placeholder="Password" />
 			<a href="hhtp/social">Forgot your password?</a>
 			<button class="button1" ><a className="a1" href="/blog-overview">Sign In </a></button> 
 		</form>
 	</div>

 	<div class="overlay-container1">

 		<div class="overlay">
			
 			<div class="overlay-panel overlay-right"> 
			 <h1 className="login-header1">Hello, Developers!</h1>				
 			<p>Welcome to the Notification Service </p>
 			</div>

		</div>

 	</div>

 </div>
        
       </div>
	   </div>

	   {/* <MainFooter/> */}

     </React.Fragment>
   );
}

export default loginPage
import React, {Component} from 'react';
import Chart from './chart' ;
import successLogo from './images/success.png'
import failLogo from './images/fail.png'
import pendingLogo from './images/pending.png'
import Header from './header';

import  '../App.css'


class dashboard extends Component {

    render() { 
  return (

    <React.Fragment>
     
     <Header/>

      <div className="absolute">
      <div class="row">
  <div class="column">
  <div className="dashboard-container" id="container">
      <h1 className="h1-color">Sent SMS</h1>
      <img src={successLogo} alt="logo" />
      <h1 className="h1-color">Total: 140</h1>
     

      </div>

    
  </div>
  <div class="column" >
      <div className="column-pad">
  <div className="dashboard-container" id="container">
  <h1 className="h1-color">Failed SMS</h1>
      <img src={failLogo} alt="logo" />
      <h1 className="h1-failed-color">Total: 56</h1>
      </div>
      </div>
    
  </div>
  
  <div className="column">
  <div className="column-pad">
  <div className="dashboard-container" id="container">
  <h1 className="h1-color"> Pending SMS</h1>
      <img src={pendingLogo} alt="logo" />
      <h1 className="h1-color">Total: 27</h1>
     
      </div>
    
  </div>
</div>
</div>

 <div className="row">
     <div className="padding">
     <Chart/>
     </div>
 

 </div>

      

    
      </div>
    
        
    
    

     
  
    
    </React.Fragment>
  );
    }
}

export default dashboard
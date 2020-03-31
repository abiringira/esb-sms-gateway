import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Notifications from "./views/Notifications";
import routes from "./routes";
import withTracker from "./withTracker";


import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

class App extends Component {

  

  componentDidMount() {
    fetch('http://localhost/v1/notification',{ 
      method: 'GET',
      headers: {  
      'Authorization': 'Bearer 76c274f6-948b-4b7a-b263-60114b227df4',
 
    }})
    .then(res => res.json())
    .then((data) => {
      this.setState({ Notifications:  data })
     
    })
  
  }
 
   

  render() {

    return(

      <React.Fragment>
      
      {/* <Notifications Notifications={this.state.Notifications} /> */}
  <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
  

     
      {routes.map((route, index) => {
       
        return (   
       
         



          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              if(route.path === "/login")  {
              return (
              
                  <route.component {...props} />
                 
              
              )} else {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );

              }
            })
            
            
          
          
          }
          />
        );
      })}

      
    </div>
  </Router>
  </React.Fragment>
  )
}
    }

    export default App;
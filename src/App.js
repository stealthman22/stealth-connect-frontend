// Packages
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import {Navbar} from "./components/layouts/Navbar";
import {Landing} from "./components/layouts/Landing";
import { Register} from "./components/auth/Register";
import { Login} from "./components/auth/Login";
import './App.css';

const  App = () => {
 return(
   <Router>
      <Fragment >
       <Navbar />
       {/* creating the homepage */}
       <Route exact path="/" component={Landing} />
       <section className="container">
         {/* other frontend routes */}
         <Switch>
         <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login} />
         </Switch>
       </section>
      
     </Fragment>
    </Router>
  );
}

export default App;

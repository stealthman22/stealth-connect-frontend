// Packages
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


// Components
import {Navbar} from "./components/layouts/Navbar";
import {Landing} from "./components/layouts/Landing";
import './App.css';

function App() {
  return (
    <Fragment >
    <Navbar />
    <Landing />
    </Fragment>
  );
}

export default App;

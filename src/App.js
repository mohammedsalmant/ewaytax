import React from 'react';
import './App.css';
import NavBar from "./component/navbar/Nav";
import {BrowserRouter as Router ,Route} from "react-router-dom";
import AboutUs from "./component/about/About";
import Home from './component/home/Home'
import Services from './component/services/Services'
import Login from './component/Account/Login'
import Footer from './component/footer/Footer'

function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={AboutUs} />
      <Footer />
    </Router>
  );
}

export default App;

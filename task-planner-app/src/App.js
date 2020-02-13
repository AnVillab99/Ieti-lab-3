import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Login} from "./Login"
import {TodoApp} from "./TodoApp"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    localStorage.setItem("email","test@mail.com");
    localStorage.setItem("password","admin");
    if(! localStorage.getItem("isLoggedIn")){
        localStorage.setItem("isLoggedIn",false);
    }
    this.loginF = this.loginF.bind(this);
    
}

loginF() {
    console.log("entro a log de app")
    this.setState({isLoggedIn : true});
    localStorage.setItem("isLoggedIn","true")
    
}


render() {
    const LoginView = () => (<Login loginF = { this.loginF }/>);
    const TodoAppView = () => (<TodoApp/>);
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>
                <div>
                <Route component={!(this.state.isLoggedIn || localStorage.getItem("isLoggedIn"))? LoginView : TodoAppView}/>
                
                </div>
            </div>
        </Router>
    );
}


}

export default App;

import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {Login} from "./components/Login"
import {TodoApp} from "./components/TodoApp"
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {
constructor(props) {
    super(props);
    
    this.state = { isLoggedIn: false };
    localStorage.setItem("email","test@mail.com");
    localStorage.setItem("password","admin");
    if(! localStorage.getItem("isLoggedIn")){
        console.log("no esta logeado en consturctor ap")
        localStorage.setItem("isLoggedIn",false);
    }
    this.loginF = this.loginF.bind(this);
    console.log(this.state.isLoggedIn)
    console.log(localStorage.getItem("isLoggedIn"))
    
}

loginF() {
    console.log("entro a log de app")
    this.setState({isLoggedIn : true});
    localStorage.setItem("isLoggedIn",true)
    
}


render() {
    
    console.log("--------------------------------------------")
    if((this.state.isLoggedIn || ('true'===localStorage.getItem("isLoggedIn")))){
        console.log("si")

    }
    else{ console.log("no")}
    console.log(this.state.isLoggedIn)
    console.log(localStorage.getItem("isLoggedIn"))

    console.log("////////////////////////////////////////////////////")
    const LoginView = () => (<Login loginF = { this.loginF }/>);
    const TodoAppView = () => ( <TodoApp/> );
    return (
        <Router>
            <div className="App">
                
                <div>
                <Route component={!(this.state.isLoggedIn || ('true'===localStorage.getItem("isLoggedIn")))? LoginView : TodoAppView}/>
                
                </div>
            </div>
        </Router>
    );
}


}

export default App;

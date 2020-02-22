import React, {Component} from 'react';

import {TodoList} from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DrawerTodo from "./Drawer"

import AddButton from "./AddButton"
import moment from "moment"


export class TodoApp extends Component{


    constructor(props) {
        super(props);
        this.state = { items: [], description: "", status: "", dueDate: moment().format('YYYY-MM-DD'), name: "", email: ""};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let todo ={state:"in progress",description:"algo",status:"ready",author:"yo",email:"yo@y",dueDate:moment().format('YYYY-MM-DD')}
        this.state.items.push(todo)
    }

    render(){
        return(
        <div className="App">
        <DrawerTodo />
            <h3>New TODO</h3>

        <br/>
        <br/>
        <div>
        <TodoList todoList={this.state.items}/>
        </div>
        <div>
        
        <AddButton  meter={this}/>
            
                
        </div>
        </div>
    );
    }



    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(e) {
        console.log("eeeeeeeeeeeeeeeeeeeeee")
        console.log(e)
        this.setState({
            dueDate: moment(e.target.value,'YYYY-MM-DD')
        });
        console.log(this.state.dueDate)
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        

        if (!this.state.description.length || !this.state.status.length || !this.state.dueDate || !this.state.name.length || !this.state.email.length)
            return;

        const newItem = {
            description: this.state.description,
            status: this.state.status,
            dueDate: this.state.dueDate,
            name: this.state.name, 
            email: this.state.email 

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: "",
            status: "",
            dueDate: moment().format('YYYY-MM-DD'),
            name: "",
            email: "",
        }));


    }

}
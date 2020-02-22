import React, {Component} from 'react';

import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import DrawerTodo from "./Drawer"
import Grid from '@material-ui/core/Grid';

import AddButton from "./AddButton"
import moment from "moment"


export class TodoApp extends Component{


    constructor(props) {
        super(props);
        this.state = { items: [], description: "", state: "", dueDate: moment().format('YYYY-MM-DD'), author: "", email: ""};
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        let todo ={state:"in progress",description:"algo",state:"ready",author:"yo",email:"yo@y",dueDate:moment().format('YYYY-MM-DD')}
        this.state.items.push(todo)
    }

    render(){
        return(
        <div className="App" style={{paddingBottom:"10px"}}>
            <DrawerTodo />
            <h3>New TODO</h3>
            <div>
                <Grid container direction="row" spacing={3} style={{paddingTop:"30px"}}>
                    <Grid item>
                        <TodoList todoList={this.state.items}/>
                    </Grid>
                    <Grid>

                    </Grid>
        
                    <Grid item>
                        <AddButton  meter={this}/>
                    </Grid>
                </Grid>
            </div>      
        </div>
    );
    }



    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStateChange(e) {
        this.setState({
            state: e.target.value
        });
    }

    handleDateChange(e) {
        console.log("eeeeeeeeeeeeeeeeeeeeee")
        console.log(e.target.value)
        this.setState({
            dueDate: e.target.value
        });
        console.log("due date " +this.state.dueDate)
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        

        if (!this.state.description.length || !this.state.state.length || !this.state.dueDate || !this.state.author.length || !this.state.email.length)
            return;

        const newItem = {
            description: this.state.description,
            state: this.state.state,
            dueDate: this.state.dueDate,
            author: this.state.author, 
            email: this.state.email 

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: "",
            state: "",
            dueDate: moment().format('YYYY-MM-DD'),
            author: "",
            email: "",
        }));


    }

}
import React from 'react';
import TodoCard from './TodoCard'
import Grid from '@material-ui/core/Grid';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        
        
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
           
            return (
                <TodoCard key={i} state ={todo.state} description={todo.description} priority={todo.priority} dueDate={todo.dueDate} authorEmail={todo.email} author={todo.author}/>
            );
        });

        return (
            <div>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                    
                    {todoList}
                
                    
                </Grid>

            </div>
        );


    }

}
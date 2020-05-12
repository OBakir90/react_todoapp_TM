import React, { Component } from 'react'
import { BrowserRouter, Route} from "react-router-dom";
import axios from "axios"
import Todos from "./components/Todos.jsx"
import Header from "./components/layout/Header.jsx"
import AddToDo from "./components/AddToDo.jsx"
import About from "./components/pages/About.jsx"
import { v4 as uuidv4 } from 'uuid';
import './App.css';



class App extends Component {
    state= {
        todos:[]
    }


    componentDidMount (){
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then(response=>this.setState({todos:response.data})
        )
    }

    markComplete = (id) => {
        this.setState={
            todos:this.state.todos.map ((todo)=> {
                if (todo.id===id) {
                    todo.completed=!todo.completed;
                }
                return todo;
            })      
        }
        console.log(this.state)
    }

    deleteTodo= (id) => {
        this.setState({todos:[...this.state.todos.filter (todo=>todo.id!==id)]
    })}


    addNewToDo=(title)=>{
        const newTodo = {
            id:uuidv4(),
            title,
            completed:false
        }
        this.setState({todos:[...this.state.todos, newTodo]});
    }


    render() {
        return ( 
            <BrowserRouter>
                <div className = "App" >
                    <div className="container">
                        <Route exact path="/" render = {(props)=> (
                            <React.Fragment>
                                <Header/>
                                <AddToDo addNewToDo={this.addNewToDo} />
                                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/> 
                            </React.Fragment>)
                        }/>
                        <Route path="/about" component={About}/>
                    </div>              
                </div >
            </BrowserRouter>
           
        )
    }
}


export default App;
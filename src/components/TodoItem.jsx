import React, { Component } from 'react'

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        }
    }
 

    render() {
        
        const { id, title }= this.props.todo;
        
        return ( 
        <div style = { this.getStyle() } >
            <p>
            <input type = "checkbox" onChange={this.props.markComplete.bind(this, id)}/> {"        "}
            { title } 
            <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
            </p> 
            </div>
        )
    }
}

const buttonStyle = {
    backgroundColor:"red",
    borderRadius:"50%",
    float:"right"
}

export default TodoItem;
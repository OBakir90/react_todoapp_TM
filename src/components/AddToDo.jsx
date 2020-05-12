import React, { Component } from 'react'

class AddToDo extends Component {
    state={
        title:""
    }

    handleAddChange=(e) => this.setState({title:e.target.value});
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addNewToDo(this.state.title);
        this.setState({title:""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{display:"flex"}}>
                <input type="text" name="title" placeholder="Add Todo..." style={{flex:"10", padding:"5px"}} value={this.state.title} onChange={this.handleAddChange}/>
                <input type="submit" value="submit" className="btn" style={{}} />
            </form>
        )
    }
}

export default AddToDo;
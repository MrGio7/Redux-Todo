import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';

class Todo extends Component{
    state = {
        newTodo: ''
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    }

    updateList = e => {
        e.preventDefault();
        this.props.add(this.state.newTodo);
    }

    render() {
        console.log(this.state.newTodo)
        return(
        <div className='todo-list'>

            <form>
                <input 
                    name='newTodo'
                    type="text"
                    placeholder="...todo"
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />

                <button onClick={this.updateList} >Add </button>
            </form>

            <div>{this.props.todo}</div>

        </div>
        )
    }
};

const mapStateToProps = (state) => {

    return{
        todo: state.todo.map(item => {
            return <li key={item.id}>{item.task}</li>
        })
    }
}

export default connect(mapStateToProps, {add})(Todo)
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add } from '../actions';
import { toggleTask } from '../actions';

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
        this.setState({ newTodo: '' })
    }

    toggleTodo = index =>{
        this.props.toggleTask(index)
    }

    removeSelected = e => {
        e.preventDefault();


    }

    render() {
        console.log(this.props.todo)
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

                <button>Clear</button>
            </form>

            <ul>
                {this.props.todo.map((todo, index) => (
          <li key={index} onClick={() => this.toggleTodo(index)} className={`${todo.completed}`}>
            {todo.task}
          </li>
        ))}
            </ul>

        </div>
        )
    }
};

const mapStateToProps = (state) => {

    return{
        todo: state.todo.map(item => {
            return item
        })
    }
}

export default connect(mapStateToProps, {add, toggleTask})(Todo)
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component{

    render() {
        return(
        <div className='todo-list'>

            <form>
                <input 
                    name='todoText'
                    type="text"
                    placeholder="...todo"
                />

                <button >Add </button>
            </form>

            <h4>{this.props.todo}</h4>

        </div>
        )
    }
};

const mapStateToProps = (state) => {
    return{
        todo: state.todo
    }
}

export default connect(mapStateToProps, {})(Todo)
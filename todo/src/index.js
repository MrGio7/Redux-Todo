import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import todo from './reducers';

const store = createStore(todo);

ReactDOM.render( 
    <Provider store={store}>
        <Todo />
    </Provider>, 
    document.getElementById('root'));

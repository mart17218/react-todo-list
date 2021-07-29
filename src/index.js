import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const todoList = [
  { text: '買書' },
  { text: '洗衣服' }
]

ReactDOM.render(<App tasks={todoList} />,
  document.getElementById('root')
)

reportWebVitals()

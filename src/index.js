import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';
import ApplicationReducer from './ApplicationReducer';

import './styles.css';

const rootElement = document.getElementById('root');

// ReactDOM.render(<Application />, rootElement);

ReactDOM.render(<ApplicationReducer/>, rootElement);

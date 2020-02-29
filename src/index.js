import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/MainContainer';
import * as serviceWorker from './js/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> {/* Wrap App with Router */}
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

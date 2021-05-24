import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
import App from './components/App/App';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './assets/styles/base.scss';
import 'sweetalert/dist/sweetalert.css';
import Main from './pages/Main';
import firebase from './firebase';
import App from './App'

import configureStore from './config/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        renderApp(Main);
    } else {
        // No user is signed in.
        renderApp(App);
    }
});




if (module.hot) {

  module.hot.accept('./pages/Login', () => {
    const NextApp = require('./pages/Login').default
    renderApp(NextApp);
  });
}

registerServiceWorker();


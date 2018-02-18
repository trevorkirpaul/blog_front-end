import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './ConfigureStore';
import Home from './components/home/Home';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('container'));

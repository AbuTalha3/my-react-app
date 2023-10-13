import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/store';
import App from './App';
import '@testing-library/jest-dom';

describe('tests my Food app', () => {
  test('renders App component', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
  });
});

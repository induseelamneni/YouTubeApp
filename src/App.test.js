import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "../../utils/store"
import "@testing-library/jest-dom"

test('renders learn react link', () => {
  render(
    <BrowserRouter>
    <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
  );
 
});

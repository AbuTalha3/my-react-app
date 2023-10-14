import React from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import mealsSlice, { fetchMeals, initialState } from './Redux/meal';
import store from './Redux/store';
import App from './App';
import '@testing-library/jest-dom';

const mockResponseData = [
  {
    idCategory: '1',
    strCategory: 'Beef',
    strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
    strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
  },
  {
    idCategory: '2',
    strCategory: 'Chicken',
    strCategoryThumb: 'https://www.themealdb.com/images/category/chicken.png',
    strCategoryDescription: 'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
  },
  {
    idCategory: '3',
    strCategory: 'Dessert',
    strCategoryThumb: 'https://www.themealdb.com/images/category/dessert.png',
    strCategoryDescription: 'Dessert is a course that concludes a meal. The course usually consists of sweet foods, such as confections dishes or fruit, and possibly a beverage such as dessert wine or liqueur, however in the United States it may include coffee, cheeses, nuts, or other savory items regarded as a separate course elsewhere. In some parts of the world, such as much of central and western Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.\r\n\r\nThe term dessert can apply to many confections, such as biscuits, cakes, cookies, custards, gelatins, ice creams, pastries, pies, puddings, and sweet soups, and tarts. Fruit is also commonly found in dessert courses because of its naturally occurring sweetness. Some cultures sweeten foods that are more commonly savory to create desserts.',
  },
];

jest.mock('axios');
axios.get.mockResolvedValue(mockResponseData);

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

  it('should fetch meals successfully', async () => {
    // Create a mock response data to simulate the actual response
    const mockResponseData = [
      { idCategory: '1', strCategory: 'Category 1' },
      { idCategory: '2', strCategory: 'Category 2' },
    ];

    // Mock Axios response using axios-mock-adapter
    axios.get.mockResolvedValue({ data: { categories: mockResponseData } });

    // Create the initial state
    const state = initialState;

    // Create a mock Redux store
    const store = { getState: () => state, dispatch: jest.fn() };

    // Dispatch the async action
    await fetchMeals()(store.dispatch);
    // Get the new state after the action
    const newState = mealsSlice(state, {
      type: fetchMeals.fulfilled.type,
      payload: mockResponseData,
    });

    // Verify that loading is set to false
    expect(newState.loading).toBe(false);

    // Verify that meals data is updated
    expect(newState.meals).toEqual(mockResponseData);

    // Verify that error is null
    expect(newState.error).toBe(null);
  });

  it('should handle fetch meals error', async () => {
    // Mock Axios to simulate an error response
    axios.get.mockRejectedValue(new Error('Network Error'));

    // Create the initial state
    const state = initialState;

    // Create a mock Redux store
    const store = { getState: () => state, dispatch: jest.fn() };

    // Dispatch the async action
    await fetchMeals()(store.dispatch);

    // Get the new state after the action
    const newState = mealsSlice(state, { type: fetchMeals.rejected.type, error: new Error('Network Error') });

    // Verify that loading is set to false
    expect(newState.loading).toBe(false);

    // Verify that meals data is unchanged
    expect(newState.meals).toEqual([]);

    // Verify that the error message is set
    expect(newState.error).toBe('Network Error');
  });
});

import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../Redux/configureStore';
import SingleRocket from '../components/singleRocket';
import Rockets from '../pages/Rockets';

describe('It renders', () => {
  it('SingleRocket correctly', () => {
    const tree = render(
      <Provider store={store}>
        <SingleRocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Rockets correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

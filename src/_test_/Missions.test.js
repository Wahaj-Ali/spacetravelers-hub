import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/configureStore';
import '@testing-library/jest-dom';
import Missions from '../pages/Missions';

describe('Missions page', () => {
  test('renders Missions page correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

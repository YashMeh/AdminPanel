import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App'
describe('Test of the App component', () => {
   it('renders without crashing', () => {
      shallow(<App />);
    });
});
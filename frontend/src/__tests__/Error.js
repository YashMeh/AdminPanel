import React from 'react';
import { shallow } from 'enzyme';
import Error from '../components/Error'
describe('Test of the error component', () => {
   it('renders without crashing', () => {
      shallow(<Error />);
    });
});
import React from 'react';
import { shallow } from 'enzyme';
import { ProjectComponent } from './Project';

describe('Component Project', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProjectComponent />);
    expect(component).toBeTruthy();
  });
});

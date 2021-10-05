import React from 'react';
import { shallow } from 'enzyme';
import { ProjectsComponent } from './Projects';

describe('Component Projects', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProjectsComponent />);
    expect(component).toBeTruthy();
  });
});

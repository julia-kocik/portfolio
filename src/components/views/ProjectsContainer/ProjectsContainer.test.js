import React from 'react';
import { shallow } from 'enzyme';
import { ProjectsContainerComponent } from './ProjectsContainer';

describe('Component ProjectsContainer', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProjectsContainerComponent />);
    expect(component).toBeTruthy();
  });
});

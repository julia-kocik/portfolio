import React from 'react';
import { shallow } from 'enzyme';
import { MainBarComponent } from './MainBar';

describe('Component MainBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<MainBarComponent />);
    expect(component).toBeTruthy();
  });
});

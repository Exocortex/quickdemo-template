import React from 'react';
import { shallow } from 'enzyme';
import { Buttons } from './index';

describe('Button Test Suite', () => {
  it('renders out a component', () => {
    const button = shallow(<Buttons options={[]} />);
    expect(button.hasClass('tk-buttons-component')).toEqual(true);
  });

  it('renders a title when provided one', () => {
    const button = shallow(<Buttons title="cat" options={[]} />);
    expect(button.find('.tk-buttons-component').length).toBe(1);
  });

  it('does not render a title div if a title is not provided', () => {
    const button = shallow(<Buttons options={[]} />);
    expect(button.find('.tk-buttons-header').length).toBe(0);
  });
});

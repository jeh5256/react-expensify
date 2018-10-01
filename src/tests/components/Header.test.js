import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRendering from 'react-test-renderer/shallow';
import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('Should render Header correctly', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();

});
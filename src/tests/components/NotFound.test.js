import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage  from '../../components/NotFound';

test('Should render NotFoundPage', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
});
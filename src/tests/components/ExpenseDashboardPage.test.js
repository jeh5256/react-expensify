import React from 'react';
import { shallow } from 'enzyme';
import DashboardComponent from '../../components/ExpenseDashboardPage';

test('Should render DashboardComponent', () => {
    const wrapper = shallow(<DashboardComponent />);
    expect(wrapper).toMatchSnapshot();
});
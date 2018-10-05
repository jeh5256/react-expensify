import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should rended ExpensesSummery with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={150} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should rended ExpensesSummery with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={1200} />);
    expect(wrapper).toMatchSnapshot();
});
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('Should correctly total a single expense', () => {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(109500);
});

test('Should correctly total a multipe expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
});

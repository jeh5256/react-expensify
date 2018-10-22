import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import { dispatch } from 'rxjs/internal/observable/pairs';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const matchDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, matchDispatchToProps)(AddExpensePage);
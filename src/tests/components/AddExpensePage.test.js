import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixture/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
});

test('should rendere addExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenCalledWith('/');
  expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});

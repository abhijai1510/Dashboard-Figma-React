import { ExpenseGroup } from '../types'
import './ExpenseList.css'

interface ExpenseListProps {
  expenseGroups: ExpenseGroup[]
}

export const ExpenseList = ({ expenseGroups }: ExpenseListProps) => {
  return (
    <div className="expense-list">
      {expenseGroups.map((group, index) => (
        <div key={index} className="expense-group">
          <div className="expense-date">
            <span>{group.date}</span>
          </div>
          <div className="expense-items">
            {group.expenses.map((expense, expIndex) => (
              <div key={expIndex} className="expense-item">
                <img
                  src={expense.icon}
                  alt={expense.category}
                  className="expense-icon"
                />
                <div className="expense-details">
                  <h3 className="expense-category">{expense.category}</h3>
                  <p className="expense-description">{expense.time} • {expense.description}</p>
                  <p className="expense-amount">{expense.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExpenseList

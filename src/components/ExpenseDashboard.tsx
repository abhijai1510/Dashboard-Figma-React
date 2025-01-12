import { ExpenseList } from './ExpenseList'
import { SpendingChart } from './SpendingChart'
import { expenseData, spendingCategories } from '../data'
import './ExpenseDashboard.css'

const ExpenseDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="main-section">
          <div className="header">
            <div>
              <h1 className="title">Expenses</h1>
              <p className="date-range">01 - 25 March, 2020</p>
            </div>
          </div>
          <ExpenseList expenseGroups={expenseData} />
        </div>
        <div className="chart-section">
        </div>
      </div>
    </div>
  )
}

export default ExpenseDashboard

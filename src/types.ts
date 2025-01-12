export interface ExpenseItem {
  icon: string
  category: string
  time: string
  description: string
  amount: string
}

export interface ExpenseGroup {
  date: string
  expenses: ExpenseItem[]
}

export interface SpendingCategory {
  category: string
  amount: string
  progressWidth: string
}
